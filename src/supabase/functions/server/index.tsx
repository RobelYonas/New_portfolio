import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-11656e6d/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-11656e6d/contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.log("Error: RESEND_API_KEY environment variable not set");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using Resend
    const emailData = {
      from: "Portfolio Contact <onboarding@resend.dev>", // Default Resend from address
      to: ["robel4872@gmail.com"],
      subject: `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">New Portfolio Contact Message</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #1e293b;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 12px; color: #64748b;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
      reply_to: email
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.log(`Resend API error: ${response.status} - ${errorData}`);
      return c.json({ error: "Failed to send email" }, 500);
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);

    // Store the contact submission for record keeping (optional)
    await kv.set(`contact_${Date.now()}`, {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      emailId: result.id
    });

    return c.json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.log("Error sending contact email:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);
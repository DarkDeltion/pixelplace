// email.js
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "localhost",
  port: process.env.MAIL_PORT || 1025,
  secure: false,
});

router.post("/", async (req, res) => {
  const { to, subject, text } = req.body;
  if (!to || !subject || !text) return res.status(400).json({ error: "Missing fields" });

  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || '"Test" <test@example.com>',
      to,
      subject,
      text,
    });

    console.log("Email sent:", info);
    res.json({ message: "Email sent successfully!", info });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email", details: err.message });
  }
});

export default router;

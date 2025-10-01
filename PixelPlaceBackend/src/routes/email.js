import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "mailhog",   // must match your docker-compose service name
      port: 1025,
      secure: false
    });

    await transporter.sendMail({
      from: "test@pixelplace.local",
      to: "user@example.com",
      subject: "Hello from PixelPlace!",
      text: "This is a test email."
    });

    res.json({ message: "Test email sent to MailHog!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;

import express from "express";
import { sendContactEmail } from "../service/email.service";

const router = express.Router();

router.post("/send", async (req: express.Request, res: express.Response) => {
  try {
    const { user_name, user_email, message } = req.body;

    // Validation
    if (!user_name || !user_email || !message) {
      res.status(400).json({
        error: "Missing required fields: user_name, user_email, message",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      res.status(400).json({ error: "Invalid email format" });
      return;
    }

    // Send email using Resend
    const result = await sendContactEmail(user_name, user_email, message);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Failed to send email. Please try again later.",
    });
  }
});

export default router;

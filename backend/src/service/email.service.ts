import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const PORTFOLIO_OWNER_EMAIL = "markjaemerldiestro@gmail.com";

export async function sendContactEmail(
  user_name: string,
  user_email: string,
  message: string,
) {
  try {
    // Email to portfolio owner
    const ownerEmailResult = await resend.emails.send({
      from: "noreply@markjaemerl.dev", // You'll need to configure this domain in Resend
      to: PORTFOLIO_OWNER_EMAIL,
      subject: `New Contact Form Submission from ${user_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${user_name}</p>
            <p><strong>Email:</strong> ${user_email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            This is an automated email from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // Confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "noreply@markjaemerl.dev",
      to: user_email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${user_name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <p>Best regards,<br/>Mark Jaemerl Diestro</p>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Please do not reply to this email. If you have any additional information to add, please contact us through the portfolio website.
          </p>
        </div>
      `,
    });

    return {
      ownerEmail: ownerEmailResult,
      userEmail: userEmailResult,
    };
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    throw error;
  }
}

// pages/api/contact.ts

import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Validate input fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
      // Prepare email content
      const htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

      await transporter.sendMail({
        ...mailOptions,
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        html: htmlContent,
      });

      return res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Failed to send the message." });
    }
  }

  return res.status(405).json({ success: false, message: "Method not allowed." });
};

export default handler;

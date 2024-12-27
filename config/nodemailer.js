import nodemailer from "nodemailer";

const email = process.env.EMAIL; // Your email address
const pass = process.env.EMAIL_PASS; // Your email password or app-specific password

// Nodemailer transporter configuration
export const transporter = nodemailer.createTransport({
  service: "gmail", // or your email provider (e.g., 'hotmail', 'yahoo', etc.)
  auth: {
    user: email,
    pass,
  },
});

// Default mail options
export const mailOptions = {
  from: email,
  to: email, // Replace with the email you want to receive messages
};

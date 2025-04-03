import nodemailer from "nodemailer";

// Ensure environment variables are loaded
if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
  throw new Error("Missing EMAIL or EMAIL_PASS in environment variables");
}

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// Nodemailer transporter configuration
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

// Default mail options
export const mailOptions = {
  from: email,
  to: email, // Replace with the recipient's email
};

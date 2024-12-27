// lib/api.js
export const sendContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to send the message.");
  }

  return response.json();
};

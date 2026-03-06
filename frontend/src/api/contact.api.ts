/* eslint-disable @typescript-eslint/no-explicit-any */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to send email");
    }

    return await response.json();
  } catch (error: any) {
    console.error("API Error:", error);
    throw error;
  }
}

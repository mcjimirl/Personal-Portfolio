/* eslint-disable @typescript-eslint/no-explicit-any */
export async function sendToN8N(payload: Record<string, any>) {
  try {
    const response = await fetch("https://n8n.cloudmateria.com/webhook-test/Maximo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send request to n8n");
    }

    return await response.json();
  } catch (error: any) {
    console.error("API Error:", error);
    throw error;
  }
}

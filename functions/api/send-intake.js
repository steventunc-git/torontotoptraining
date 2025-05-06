import { sendEmail } from '../lib/mail.js';

export async function onRequest(context) {
  const { request } = context;

  if (request.method !== "POST") {
    console.warn("Method not allowed:", request.method);
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body;
  try {
    const raw = await request.text();
    console.log("Raw request body:", raw);
    body = JSON.parse(raw);
  } catch (err) {
    console.error("Invalid JSON in request:", err);
    return new Response("Bad Request: Invalid JSON", { status: 400 });
  }

  try {
    const result = await sendEmail(body);

    console.log("Email sent, response:", result);

    return new Response(`MailChannels: ${result.status}\n\n${result.body}`, {
      status: result.status,
      headers: { "Content-Type": "text/plain" }
    });
  } catch (err) {
    console.error("Email sending failed:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}


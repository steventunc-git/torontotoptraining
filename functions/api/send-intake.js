import { sendEmail } from '../lib/mail.js';

export async function onRequestPost(context) {
  const raw = await context.request.text();
  console.log("Received request:", raw);

  const body = JSON.parse(raw);
  const result = await sendEmail(body);

  return new Response(`MailChannels: ${result.status}\n\n${result.body}`, {
    status: result.status,
    headers: { "Content-Type": "text/plain" }
  });
}


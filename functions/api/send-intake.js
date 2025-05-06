import { sendEmail } from '../lib/mail.js';

export async function onRequestPost(context) {
  const body = await context.request.json();

  const result = await sendEmail(body);

  return new Response(`MailChannels: ${result.status}\n\n${result.body}`, {
    status: result.status,
    headers: { "Content-Type": "text/plain" }
  });
}


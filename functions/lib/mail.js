export async function sendEmail(answers) {
  const message = {
    personalizations: [{ to: [{ email: "torontotoptraining@gmail.com" }] }],
    from: { email: "admin@torontotoptraining.com" },
    subject: "New Intake Submission",
    content: [
      {
        type: "text/plain",
        value: answers.join('\n')
      }
    ]
  }

  const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message)
  })

  const text = await response.text()
  return { status: response.status, body: text }
}

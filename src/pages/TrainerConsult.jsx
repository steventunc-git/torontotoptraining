import React from 'react'

export default function TrainerConsult() {
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/trainer-consultation.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        padding: '4rem 1rem'
      }}
    >
      <div className="max-w-2xl mx-auto text-left bg-black bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Trainer Consult</h1>
        <p className="mb-4">
          Every trainer eventually encounters challenges—whether it's gaining new clients,
          retaining current ones, or helping someone through a frustrating plateau. Yet asking
          for help can often feel like admitting defeat.
        </p>
        <p className="mb-4">
          This service offers trainers a discreet, professional space to get perspective,
          tools, and actionable strategies—so you can confidently continue serving your clients.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Not sure how to progress a stalled client?</li>
          <li>Need advice on programming, language, or form strategy?</li>
          <li>Looking to improve retention, close more sales, or build engagement?</li>
        </ul>
        <p className="mt-4">
          Get support for your toughest training scenarios—without ego, without judgment.
        </p>
      </div>
    </section>
  )
}

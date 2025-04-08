import React from 'react'

const PersonalTraining = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-left">
      <h1 className="text-3xl font-bold mb-4">How does it work?</h1>
      <p className="mb-6">
        Hiring a personal trainer is the most effective way to lock in your fitness goals. It’s an accountability mechanism — the same way you’d hire an accountant to manage your finances or a lawyer to guide you through a legal process, you hire a trainer to execute a physical transformation with structure, efficiency, and expert oversight.
      </p>
      <ul className="list-disc pl-5 space-y-4 text-base">
        <li>
          <strong>In-person sessions:</strong> A face-to-face session with a personal trainer who directs your workout, adjusts your form, and builds your training plan in real-time.
        </li>
        <li>
          <strong>Virtual sessions:</strong> A remote session via phone or laptop where you follow your plan live in a gym or at home, with the trainer discreetly guiding you and correcting your form as needed.
        </li>
        <li>
          <strong>Semi-directed sessions:</strong> You perform your own workout while a trainer observes, gives form feedback, and suggests changes to structure, volume, or post-workout recovery.
        </li>
      </ul>
    </div>
  )
}

export default PersonalTraining

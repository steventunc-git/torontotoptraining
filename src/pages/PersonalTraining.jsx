import React from 'react'

const PersonalTraining = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/personal_training.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        padding: '4rem 1rem'
      }}
    >
      <div className="max-w-2xl mx-auto text-left bg-black bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">How does it work?</h1>
        <p className="mb-6">
          Hiring a personal trainer is the most effective way to lock in your fitness goals.
          Just as you might hire an accountant or a lawyer for professional help, a trainer provides the structure,
          guidance, and accountability needed to stay committed and succeed.
        </p>
        <ul className="list-disc pl-5 space-y-4 text-base">
          <li>
            <strong>In-person sessions:</strong> Face-to-face workouts with a trainer who adjusts your form and plans your routine.
          </li>
          <li>
            <strong>Virtual sessions:</strong> Remote training over video to guide you discreetly whether at home or in a gym.
          </li>
          <li>
            <strong>Semi-directed sessions:</strong> A trainer observes your self-led workout, giving feedback and adjusting your routine.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PersonalTraining

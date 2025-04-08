import React from 'react'

export default function ProgramDesign() {
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/program.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-4xl font-bold">Program Design</h1>
        <p>
          Have you been following online programs and hit a plateau? Reaching a specific goal
          often requires a customized approach tailored to your individual needs.
        </p>
        <p>
          Most commercial programs rely on simplified versions of “periodization” — a method
          originally developed in Soviet-era training. Properly applied, it’s the gold standard
          for long-term progress.
        </p>
        <p>
          Periodization helps you:
        </p>
        <ul className="space-y-2">
          <li>• Build lean muscle efficiently</li>
          <li>• Break through stagnation</li>
          <li>• Hit personal records with precision</li>
        </ul>
        <p>
          Whether you're prepping for a competition, recovering from injury, or simply want a
          roadmap that works — a customized program will take your training to the next level.
        </p>
      </div>
    </section>
  )
}

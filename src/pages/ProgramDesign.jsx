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
        padding: '4rem 1rem'
      }}
    >
      <div className="max-w-2xl mx-auto text-left bg-black bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Program Design</h1>
        <p className="mb-4">
          Have you been doing online workout programs? Hit a plateau? Reaching a specific target goal
          requires a bespoke training plan tailored to your biology and milestones.
        </p>
        <p className="mb-4">
          Most commercial programs follow the Soviet-inspired periodization method—also known as
          progressive overload. This system lets you schedule training phases that align with
          goals like building lean mass, hitting PRs, or preparing for specific events.
        </p>
        <ul className="list-disc pl-5 space-y-4 text-base mb-4">
          <li>Microcycles (Short-term): Weekly or bi-weekly goal focus</li>
          <li>Mesocycles (Medium-term): Monthly program blocks with targets</li>
          <li>Macrocycles (Long-term): Seasonal or annual planning to peak on time</li>
        </ul>
        <p className="mb-4">
          Custom programming can also include:
        </p>
        <ul className="list-disc pl-5 space-y-4 text-base mb-4">
          <li>Meal and supplement planning</li>
          <li>Hormonal and metabolic optimization</li>
          <li>Adaptations for injury, illness, or special conditions</li>
        </ul>
        <p>
          Whether it’s a 4-week plan or a yearlong map, a professional program keeps you focused
          and progressing.
        </p>
      </div>
    </section>
  )
}

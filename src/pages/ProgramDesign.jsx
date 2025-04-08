import React from 'react'

const ProgramDesign = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/program-v2.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        padding: '4rem 1rem'
      }}
    >
      <div className="max-w-2xl mx-auto text-left bg-black bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-left">Program Design</h1>
        <p className="mb-6">
          Have you been doing online workout programs? Hit a plateau? Reaching a specific target goal
          requires a bespoke training plan tailored to your biology and milestones.
        </p>
        <p className="mb-6">
          Most commercial programs follow the Soviet-inspired periodization method—also known as
          progressive overload. This system lets you schedule training phases that align with
          goals like building lean mass, hitting PRs, or preparing for specific events.
        </p>
        <ul className="list-disc pl-5 space-y-4 text-base mb-6">
          <li><strong>Microcycles (Short-term):</strong> Weekly or bi-weekly goal focus</li>
          <li><strong>Mesocycles (Medium-term):</strong> Monthly program blocks with targets</li>
          <li><strong>Macrocycles (Long-term):</strong> Seasonal or annual planning to peak on time</li>
        </ul>
        <p className="mb-6">
          Custom programming can also include:
        </p>
        <ul className="list-disc pl-5 space-y-4 text-base mb-6">
          <li><strong>Meal and supplement planning:</strong> Nutrition aligned with performance and recovery</li>
          <li><strong>Hormonal and metabolic optimization:</strong> Tailored routines for unique physiology</li>
          <li><strong>Condition-based adaptations:</strong> Programming for injuries, illness, or other needs</li>
        </ul>
        <p>
          Whether it’s a 4-week plan or a yearlong map, a professional program keeps you focused
          and progressing.
        </p>
      </div>
    </section>
  )
}

export default ProgramDesign

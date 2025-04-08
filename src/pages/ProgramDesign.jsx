import React from 'react'

export default function ProgramDesign() {
  return (
    <div className="program-design-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Program Design</h1>

      <p>
        Experiencing a plateau in your fitness journey can be both frustrating and demotivating.
        This stagnation often indicates that your current workout regimen no longer challenges your body
        sufficiently to elicit further adaptations. To overcome this, a personalized, periodized training program becomes essential.
      </p>

      <img src="/unnamed.png" alt="Performance vs Genetic Potential" style={{ width: '100%', margin: '2rem 0' }} />
      <img src="/basic_athletic_performance_curve.webp" alt="Performance curve by level" style={{ width: '100%', margin: '2rem 0' }} />
      <img src="/how-much-muscle-gain-per-year-skinny-ectomorph-hardgainer-compared-to-average.jpg" alt="Muscle gain per year" style={{ width: '100%', margin: '2rem 0' }} />

      <p>
        Periodization is a systematic approach to training that involves the strategic manipulation of exercise variables—
        such as load, volume, and intensity—over specific timeframes. This method is designed to optimize performance gains
        and prevent overtraining by organizing training into distinct cycles:
      </p>

      <ul style={{ paddingLeft: '1rem', marginBottom: '1rem' }}>
        <li><strong>Microcycle</strong>: Usually lasting up to a week, focusing on short-term goals and daily training variations.</li>
        <li><strong>Mesocycle</strong>: Spanning several weeks to months, targeting specific training adaptations like strength or endurance.</li>
        <li><strong>Macrocycle</strong>: Encompassing the entire training year, integrating various mesocycles to achieve long-term objectives.</li>
      </ul>

      <p>
        This structured approach allows for planned variations in training stimuli, ensuring continuous progression and minimizing the risk of plateaus.
        <br />
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4637911/?utm_source=chatgpt.com" target="_blank" rel="noreferrer">[Scientific Source]</a>
      </p>

      <p>
        The origins of periodization trace back to the Soviet Union, where it was developed to enhance athletic performance systematically.
        This methodology has since been widely adopted and refined, forming the foundation of many contemporary training programs.
        <br />
        <a href="https://en.wikipedia.org/wiki/Sports_periodization?utm_source=chatgpt.com" target="_blank" rel="noreferrer">[Wikipedia]</a>
      </p>

      <p>Incorporating periodization into your fitness routine offers several advantages:</p>
      <ul style={{ paddingLeft: '1rem' }}>
        <li><strong>Optimized Performance</strong>: Achieve peak performance at designated times aligned with competitions or life events.</li>
        <li><strong>Injury Prevention</strong>: Structured recovery phases reduce the risk of overuse injuries.</li>
        <li><strong>Psychological Benefits</strong>: Variation in training prevents monotony and maintains motivation.</li>
      </ul>

      <p>
        In summary, adopting a periodized training plan tailored to your individual needs and goals can effectively break through performance plateaus,
        leading to continuous improvement and long-term success in your fitness endeavors.
      </p>
    </div>
  )
}

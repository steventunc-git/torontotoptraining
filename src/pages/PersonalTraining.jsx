import React from 'react';

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
        padding: '4rem 1rem',
      }}
    >
      <div className="max-w-3xl mx-auto text-left bg-black bg-opacity-60 p-6 rounded-lg space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Personal Training (Beginner to Intermediate)</h2>
          <p className="mb-4">
            Ideal for those new to the gym or seeking guidance with form, structure, and consistency. In-person sessions take place 2–3 times per week at a gym of your choosing and are designed to help build confidence, movement quality, and long-term momentum.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Virtual Training (Intermediate to Advanced)</h2>
          <p className="mb-4">
            Designed for working professionals who know how to train but lack time to program effectively. We’ll meet remotely via Zoom and train around your schedule. You’ll save time while still receiving expert oversight, progress tracking, and structure.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Live Zoom training sessions</li>
            <li>Flexible scheduling</li>
            <li>Weekly check-ins and progression reviews</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Online Coaching (Advanced to Professional)</h2>
          <p className="mb-4">
            For seasoned lifters, competitors, or those looking to refine high-level goals with expert support. Coaching includes complete programming, nutrition, and supplementation, plus weekly support and unlimited plan updates.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom training & nutrition plan</li>
            <li>Weekly virtual check-ins</li>
            <li>Bi-weekly progress reviews</li>
            <li>Unlimited plan modifications</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;

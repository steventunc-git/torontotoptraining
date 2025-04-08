import React, { useState } from 'react'

const firstQuestion = {
  text: "Which best describes you?",
  options: [
    { label: "I need help getting started with working out", value: "1" },
    { label: "I need a workout plan", value: "2" },
    { label: "I’m a trainer and need help with a client", value: "3" },
  ],
}

const followUps = {
  1: {
    text: "What are you trying to accomplish?",
    options: [
      { label: "Aesthetics", value: "1.1" },
      { label: "Endurance/Strength", value: "1.2" },
      { label: "Functional (Rehab/Pain Management)", value: "1.3" },
    ],
  },
  2: {
    text: "What kind of training do you do?",
    options: [
      { label: "Resistance Training (Weightlifting)", value: "2.1" },
      { label: "Endurance Training (Running)", value: "2.2" },
      { label: "Sport Specific", value: "2.3" },
    ],
  },
  3: {
    text: "What issue are you having?",
    options: [
      { label: "Stagnation", value: "3.1" },
      { label: "Conversions", value: "3.2" },
      { label: "Retention", value: "3.3" },
    ],
  },
}

const IntakeFlow = () => {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [firstAnswerKey, setFirstAnswerKey] = useState(null)
  const [showSummary, setShowSummary] = useState(false)
  const [emailStatus, setEmailStatus] = useState(null)

  const handleSelect = async (label, value) => {
    const newAnswers = [...answers, `${step === 0 ? firstQuestion.text : followUps[firstAnswerKey].text}\n${label}`]
    setAnswers(newAnswers)

    if (step === 0) {
      setFirstAnswerKey(value)
      setStep(1)
    } else {
      const res = await fetch('/api/send-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: newAnswers }),
      })
      const text = await res.text()
      setEmailStatus(text)
      setShowSummary(true)
    }
  }

  const current = step === 0 ? firstQuestion : followUps[firstAnswerKey]

  if (showSummary) {
    return (
      <div className="h-screen flex flex-col justify-center items-center p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Thanks for your response!</h2>
        <p>We’ll reach out to you shortly.</p>
        <pre className="text-sm mt-6 max-w-xl text-left whitespace-pre-wrap bg-gray-100 p-4 rounded">
          {emailStatus}
        </pre>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 text-center">
      <h2 className="text-xl font-semibold mb-6">{current.text}</h2>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        {current.options.map((o) => (
          <button
            key={o.value}
            className="bg-black text-white py-3 rounded-lg transition hover:opacity-80"
            onClick={() => handleSelect(o.label, o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default IntakeFlow

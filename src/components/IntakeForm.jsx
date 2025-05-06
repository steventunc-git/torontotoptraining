import { useState, useEffect } from "react";
import Toast from "./Toast";

const questionFlow = {
  start: {
    id: "goal",
    question: "What is your primary fitness goal?",
    options: [
      { label: "Fat Loss", next: "fat_loss_timeline" },
      { label: "Muscle Gain", next: "muscle_gain_experience" },
      { label: "Rehab", next: "rehab_context" },
      { label: "General Health", next: "training_environment" },
      { label: "Sports Performance", next: "experience_level" }
    ]
  },
  fat_loss_timeline: {
    question: "When do you want to reach your goal?",
    options: [
      { label: "4 weeks or less", next: "training_environment" },
      { label: "1–3 months", next: "training_environment" },
      { label: "3+ months", next: "training_environment" }
    ]
  },
  muscle_gain_experience: {
    question: "What’s your training experience?",
    options: [
      { label: "Beginner", next: "training_environment" },
      { label: "Intermediate", next: "training_environment" },
      { label: "Advanced", next: "training_environment" }
    ]
  },
  rehab_context: {
    question: "Is this for injury recovery or ongoing pain management?",
    options: [
      { label: "Injury Recovery", next: "training_environment" },
      { label: "Pain Management", next: "training_environment" }
    ]
  },
  training_environment: {
    question: "Where will you be doing most of your workouts?",
    options: [
      { label: "Gym", next: "session_commitment" },
      { label: "Home Gym", next: "session_commitment" },
      { label: "Minimal Equipment", next: "session_commitment" },
      { label: "Bodyweight Only", next: "session_commitment" }
    ]
  },
  session_commitment: {
    question: "How many days per week can you commit to training?",
    options: [
      { label: "1–2 Days", next: "contact_info" },
      { label: "3–4 Days", next: "contact_info" },
      { label: "5+ Days", next: "contact_info" }
    ]
  }
};

export default function IntakeForm() {
  const [step, setStep] = useState("start");
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState(null);
  const [contactInfo, setContactInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [toast]);

  const handleOptionClick = (label, next) => {
    setAnswers(prev => ({ ...prev, [step]: label }));
    setStep(next);
  };

  const handleSubmit = async () => {
    const data = {
      ...answers,
      name,
      contactMethod,
      contactInfo
    };
    try {
      const res = await fetch("/api/send-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSubmitted(true);
        setToast("Your info was submitted successfully!");
      } else {
        setToast("Something went wrong. Please try again.");
      }
    } catch (err) {
      setToast("Network error. Please try again.");
    }
  };

  if (submitted) return <div className="p-8 text-center text-xl">Thank you! We'll be in touch soon.</div>;

  if (step === "contact_info") {
    return (
      <>
        <Toast message={toast} />
        <div className="flex flex-col items-center justify-center p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What's your full name?</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-6 px-4 py-2 border rounded w-full"
          />

          {!contactMethod && (
            <div className="flex gap-4">
              <button onClick={() => setContactMethod("email")} className="px-4 py-2 bg-blue-600 text-white rounded">Email</button>
              <button onClick={() => setContactMethod("phone")} className="px-4 py-2 bg-blue-600 text-white rounded">Phone</button>
            </div>
          )}

          {contactMethod && (
            <div className="mt-4 w-full transition-all duration-300">
              <label className="block mb-2">
                {contactMethod === "email" ? "Email Address" : "Phone Number"}
              </label>
              <input
                type={contactMethod === "email" ? "email" : "tel"}
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="px-4 py-2 border rounded w-full"
              />
              <button
                onClick={handleSubmit}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded w-full"
              >Submit</button>
            </div>
          )}
        </div>
      </>
    );
  }

  const current = questionFlow[step] || questionFlow.start;

  return (
    <>
      <Toast message={toast} />
      <div className="flex flex-col items-center justify-center p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">{current.question}</h2>
        <div className="flex flex-col gap-4 w-full">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(opt.label, opt.next)}
              className="px-4 py-3 bg-blue-500 text-white rounded text-lg hover:bg-blue-600 transition"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}


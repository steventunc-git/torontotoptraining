import { useState, useEffect } from "react";

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
      const res = await fetch("/api/send-intake.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSubmitted(true);
        setToast(


"use client";

import React, { useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  text: string;
  category: "symptom" | "exposure" | "safety";
};

const questions: Question[] = [
  { id: 1, text: "Do you currently have a fever?", category: "symptom" },
  {
    id: 2,
    text: "Have you experienced chills or shivering recently?",
    category: "symptom",
  },
  {
    id: 3,
    text: "Have you had episodes of excessive sweating following a fever?",
    category: "symptom",
  },
  { id: 4, text: "Do you have headaches?", category: "symptom" },
  {
    id: 5,
    text: "Are you feeling unusually tired or weak?",
    category: "symptom",
  },
  {
    id: 6,
    text: "Have you vomited in the last 48 hours?",
    category: "symptom",
  },
  {
    id: 7,
    text: "Do you have body aches or muscle pain?",
    category: "symptom",
  },
  {
    id: 8,
    text: "Are you experiencing abdominal pain or diarrhea?",
    category: "symptom",
  },
  {
    id: 9,
    text: "Have you traveled to or lived in a malaria-prone area in the last month?",
    category: "exposure",
  },
  {
    id: 10,
    text: "Have you been bitten by mosquitoes recently?",
    category: "exposure",
  },
  {
    id: 11,
    text: "Did you sleep without a mosquito net?",
    category: "exposure",
  },
  { id: 12, text: "Have you had malaria before?", category: "exposure" },
  {
    id: 13,
    text: "Are you currently taking any other medication?",
    category: "safety",
  },
  { id: 14, text: "Are you pregnant?", category: "safety" },
  { id: 15, text: "Are you breastfeeding?", category: "safety" },
  {
    id: 16,
    text: "Do you have any known allergies to medications?",
    category: "safety",
  },
  {
    id: 17,
    text: "Have you ever been diagnosed with liver or kidney problems?",
    category: "safety",
  },
  {
    id: 18,
    text: "Do you have a condition like G6PD deficiency?",
    category: "safety",
  },
];

function evaluateDiagnosis(responses: Record<number, boolean>) {
  const symptomYes = questions.filter(
    (q) => q.category === "symptom" && responses[q.id]
  ).length;
  const exposureYes = questions.filter(
    (q) => q.category === "exposure" && responses[q.id]
  ).length;
  const safetyFlags = questions.filter(
    (q) => q.category === "safety" && responses[q.id]
  );

  const totalRisk = symptomYes + exposureYes;

  let diagnosis: string;
  let recommendation: string;

  if (totalRisk >= 6) {
    diagnosis = "Likely Malaria";
    recommendation = "Prescribe Artemether-Lumefantrine (Coartem) for 3 days.";
  } else if (totalRisk >= 3) {
    diagnosis = "Possible Malaria";
    recommendation = "Recommend a malaria test (RDT or microscopy).";
  } else {
    diagnosis = "Unlikely Malaria";
    recommendation = "Malaria unlikely. Consider other diagnoses.";
  }

  if (safetyFlags.length > 0) {
    recommendation +=
      " ⚠️ Patient has potential safety issues. Review before prescribing.";
  }

  return { diagnosis, recommendation };
}

const DiagnosisPage = () => {
  const [responses, setResponses] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<{
    diagnosis: string;
    recommendation: string;
  } | null>(null);

  const handleAnswer = (id: number, answer: boolean) => {
    setResponses((prev) => ({ ...prev, [id]: answer }));
  };

  const [warning, setWarning] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const answeredCount = Object.keys(responses).length;

    if (answeredCount === 0) {
      setWarning("⚠️ You haven’t answered any questions yet.");
      setResult(null);
      return;
    }

    setWarning(null); // clear warning if previously set
    const evaluation = evaluateDiagnosis(responses);
    setResult(evaluation);
  };

  return (
    <div className="px-4">
      <Link href="/diagnosis" className="mx-3 float-end">
        <button className="block mx-auto mt-3 mb-3 btn btn-outline btn-info">
          Go Back
        </button>
      </Link>

      <div className="container text-center py-14">
        <h2 className="text-3xl font-bold">MALARIA DIAGNOSIS</h2>
        <p className="mt-5">
          Answer the following diagnostic questions to check whether you have
          malaria.
        </p>
        <p className="mt-2">
          Just answer <b>YES</b> or <b>NO</b>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-10">
        {questions.map((q) => (
          <div key={q.id} className="mb-4">
            <p className="font-medium">{q.text}</p>
            <label className="mr-4">
              <input
                type="radio"
                name={`question-${q.id}`}
                value="yes"
                checked={responses[q.id] === true}
                onChange={() => handleAnswer(q.id, true)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name={`question-${q.id}`}
                value="no"
                checked={responses[q.id] === false}
                onChange={() => handleAnswer(q.id, false)}
              />{" "}
              No
            </label>
          </div>
        ))}

        <button
          type="submit"
          className="px-6 py-2 mt-6 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>

      {result && (
        <div className="max-w-2xl p-4 mx-auto mb-10 bg-gray-100 border rounded">
          <h3 className="text-lg font-bold">Diagnosis: {result.diagnosis}</h3>
          <p className="mt-2">{result.recommendation}</p>
        </div>
      )}

      {warning && (
        <div className="max-w-2xl p-4 mx-auto mb-6 text-yellow-800 bg-yellow-100 border border-yellow-300 rounded">
          {warning}
        </div>
      )}
    </div>
  );
};

export default DiagnosisPage;

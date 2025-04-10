"use client";
import { useState } from "react";
import { Report } from "../../interface";

export default function ReportCard({ report }: { report: Report }) {
  const [confirmed, setConfirmed] = useState(false);
  const [juryCount, setJuryCount] = useState(report.jury); // starting from random number for demo

  const handleConfirm = () => {
    if (!confirmed) {
      setConfirmed(true);
      setJuryCount(juryCount + 1);
    }
  };

  return (
    <div className="w-[90%] max-w-3xl bg-neutral-100 border-4 border-red-900 rounded-xl shadow-2xl p-8 m-6 font-serif text-neutral-900 relative">
      
    {juryCount >= 4 && (
      <div className="absolute top-4 right-6 text-red-900 text-3xl font-extrabold tracking-widest rotate-[-10deg] opacity-30 pointer-events-none select-none">
        [VERDICT]
      </div>
    )}

      {/* Case Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-extrabold text-red-800 underline underline-offset-4 decoration-2">
          🧾 CASE: {report.name.toUpperCase()}
        </h2>
        <p className="text-lg mt-4 italic border-l-4 border-red-400 pl-4 text-red-700">
          “{report.description}”
        </p>
      </div>

      <hr className="border-t-2 border-red-800 my-6" />

      {/* Report Details */}
      <div className="space-y-4 text-lg tracking-wide">
        <p>
          <span className="font-bold text-red-800">Defendant:</span>{" "}
          {report.who}
        </p>
        <p>
          <span className="font-bold text-red-800">Witness Statement By:</span>{" "}
          {report.teller}
        </p>
        <p>
          <span className="font-bold text-red-800">Date of Incident:</span>{" "}
          {report.when}
        </p>
      </div>

      <hr className="border-t-2 border-red-800 my-6" />

      {/* Jury Confirm Section */}
      <div className="text-center mt-4">
        <button
          onClick={handleConfirm}
          disabled={confirmed}
          className={`px-6 py-3 mt-4 text-lg font-bold rounded-lg shadow-md transition-all duration-300 ${
            confirmed
              ? "bg-green-700 text-white cursor-not-allowed"
              : "bg-red-700 hover:bg-red-800 text-white hover:scale-105"
          }`}
        >
          {confirmed ? "✅ คุณได้ยืนยันคำพิพากษาแล้ว" : "🧑‍⚖️ Guilty?"}
        </button>
        <p className="mt-2 text-sm text-gray-700">
          จำนวนลูกขุนที่ยืนยันแล้ว:{" "}
          <span className="font-semibold text-red-800">{juryCount}</span> คน
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ShieldAlert } from "lucide-react";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleEnter() {
    if (!checked) {
      setError(true);
      return;
    }
    setConfirmed(true);
  }

  if (confirmed) return <>{children}</>;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#f8f9f7] px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#0d1b2a] flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-7 h-7 text-[#52b788]" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Age Verification Required</h2>
        <p className="text-slate-600 text-sm mb-8">
          This section contains information about cannabis products. You must be 19 years of
          age or older to proceed.
        </p>

        <label className="flex items-start gap-3 text-left cursor-pointer mb-6 select-none">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
              if (e.target.checked) setError(false);
            }}
            className="mt-0.5 w-4 h-4 accent-[#52b788] shrink-0"
          />
          <span className="text-sm text-slate-700">
            I confirm that I am 19 years of age or older and a licensed cannabis retailer
            or industry professional.
          </span>
        </label>

        {error && (
          <p className="text-xs text-red-500 mb-4 -mt-3">
            Please confirm your age to continue.
          </p>
        )}

        <button
          onClick={handleEnter}
          className="w-full py-3 bg-[#0d1b2a] text-white font-semibold text-sm rounded-lg hover:bg-[#1a2f45] transition-colors"
        >
          Enter
        </button>

        <p className="mt-4 text-xs text-slate-400">
          By entering, you agree that cannabis is legal in your province and that you meet
          the minimum age requirement.
        </p>
      </div>
    </div>
  );
}

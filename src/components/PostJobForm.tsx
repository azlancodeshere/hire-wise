"use client";

import { useState, type FormEvent } from "react";

export default function PostJobForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-slate-200 bg-white p-8 py-12 text-center">
        <div
          aria-hidden="true"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-2xl font-bold text-brand-700"
        >
          ✓
        </div>
        <h3 className="mt-5 text-2xl font-bold text-navy-900">
          Job details received!
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
          This is a demo — no data was sent to a server. On the real
          Surhires you&apos;d see your listing go live within minutes.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-navy-900 transition hover:bg-slate-50"
        >
          Post another role
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label htmlFor="company" className="mb-2 block font-medium text-navy-900">
          Company name
        </label>
        <input
          id="company"
          name="company"
          required
          minLength={2}
          placeholder="e.g. Acme Technologies"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-medium text-navy-900">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        />
      </div>

      <div>
        <label htmlFor="jobTitle" className="mb-2 block font-medium text-navy-900">
          Job title
        </label>
        <input
          id="jobTitle"
          name="jobTitle"
          required
          minLength={2}
          placeholder="e.g. Frontend Developer"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        />
      </div>

      <div>
        <label htmlFor="jobType" className="mb-2 block font-medium text-navy-900">
          Job type
        </label>
        <select
          id="jobType"
          name="jobType"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          <option value="" disabled>
            Select job type
          </option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block font-medium text-navy-900">
          Short description{" "}
          <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="What will this person work on? Which skills matter most?"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-700 px-5 py-4 font-semibold text-white transition hover:bg-brand-800 active:bg-brand-800"
      >
        Submit job details <span aria-hidden="true">→</span>
      </button>

      <p className="text-sm text-slate-500">
        Demo form — validates in your browser, nothing is uploaded.
      </p>
    </form>
  );
}

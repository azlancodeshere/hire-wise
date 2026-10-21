"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type FormState = {
  company: string;
  email: string;
  jobTitle: string;
  jobType: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function PostJobForm() {
  const [formData, setFormData] = useState<FormState>({
    company: "",
    email: "",
    jobTitle: "",
    jobType: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com).";
    }

    if (!formData.jobTitle.trim() || formData.jobTitle.trim().length < 2) {
      newErrors.jobTitle = "Job title must be at least 2 characters.";
    }

    if (!formData.jobType) {
      newErrors.jobType = "Please select a job type.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsSubmitting(false);
      setSubmitted(true);
    }
  }

  function handleReset() {
    setFormData({
      company: "",
      email: "",
      jobTitle: "",
      jobType: "",
      description: "",
    });
    setErrors({});
    setIsSubmitting(false);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-slate-200 bg-white p-8 py-12 text-center shadow-sm"
      >
        <div
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-3xl font-bold text-brand-700"
        >
          ✓
        </div>
        <h3 className="mt-5 text-2xl font-bold text-navy-950">
          Job details received!
        </h3>
        <p className="mx-auto mt-2 font-medium text-brand-800">
          Listing for <span className="font-bold">{formData.jobTitle}</span> at{" "}
          <span className="font-bold">{formData.company}</span>
        </p>
        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-700">
          This is a demo — no data was sent to a server. On the real
          Surhires you&apos;d see your listing go live within minutes.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 rounded-lg bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800"
        >
          Post another role
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-bold text-navy-950">
          Company name <span className="text-brand-700">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
          placeholder="e.g. Acme Technologies"
          className={`w-full rounded-lg border bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 transition hover:border-slate-400 focus-visible:outline-2 ${
            errors.company
              ? "border-red-500 focus-visible:outline-red-600"
              : "border-slate-300 focus-visible:outline-brand-700"
          }`}
        />
        {errors.company && (
          <p id="company-error" className="mt-1.5 text-xs font-semibold text-red-600">
            {errors.company}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-bold text-navy-950">
          Work email <span className="text-brand-700">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="you@company.com"
          className={`w-full rounded-lg border bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 transition hover:border-slate-400 focus-visible:outline-2 ${
            errors.email
              ? "border-red-500 focus-visible:outline-red-600"
              : "border-slate-300 focus-visible:outline-brand-700"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs font-semibold text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="jobTitle" className="mb-2 block text-sm font-bold text-navy-950">
          Job title <span className="text-brand-700">*</span>
        </label>
        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          value={formData.jobTitle}
          onChange={handleChange}
          aria-invalid={Boolean(errors.jobTitle)}
          aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
          placeholder="e.g. Frontend Developer"
          className={`w-full rounded-lg border bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 transition hover:border-slate-400 focus-visible:outline-2 ${
            errors.jobTitle
              ? "border-red-500 focus-visible:outline-red-600"
              : "border-slate-300 focus-visible:outline-brand-700"
          }`}
        />
        {errors.jobTitle && (
          <p id="jobTitle-error" className="mt-1.5 text-xs font-semibold text-red-600">
            {errors.jobTitle}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="jobType" className="mb-2 block text-sm font-bold text-navy-950">
          Job type <span className="text-brand-700">*</span>
        </label>
        <select
          id="jobType"
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          aria-invalid={Boolean(errors.jobType)}
          aria-describedby={errors.jobType ? "jobType-error" : undefined}
          className={`w-full rounded-lg border bg-white px-4 py-3 text-navy-950 transition hover:border-slate-400 focus-visible:outline-2 ${
            errors.jobType
              ? "border-red-500 focus-visible:outline-red-600"
              : "border-slate-300 focus-visible:outline-brand-700"
          }`}
        >
          <option value="" disabled>
            Select job type
          </option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
        {errors.jobType && (
          <p id="jobType-error" className="mt-1.5 text-xs font-semibold text-red-600">
            {errors.jobType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-bold text-navy-950">
          Short description{" "}
          <span className="font-normal text-slate-600">(optional)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="What will this person work on? Which skills matter most?"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-brand-700"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-4 font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting job details...
          </>
        ) : (
          <>
            Submit job details <span aria-hidden="true">→</span>
          </>
        )}
      </button>

      <p className="text-center text-xs font-medium text-slate-600">
        Demo form — validates in your browser, nothing is uploaded.
      </p>
    </form>
  );
}

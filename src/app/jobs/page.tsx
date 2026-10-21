import type { Metadata } from "next";
import JobSearch from "@/components/JobSearch";

export const metadata: Metadata = {
  title: "Find Jobs",
  description:
    "Browse open roles across engineering, design, data and marketing. Filter by role, location and job type on Surhires.",
  openGraph: {
    title: "Find Jobs on Surhires",
    description:
      "Browse open roles across engineering, design, data and marketing. Filter by role, location and job type.",
  },
};

export default function JobsPage() {
  return (
    <main className="bg-warm-50 px-6 py-16 text-navy-950 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold uppercase tracking-widest text-brand-700">
          Explore opportunities
        </p>

        <h1 className="mt-3 text-4xl font-bold text-navy-900 md:text-5xl">
          Find your next opportunity
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Every listing shows the salary band upfront. Filter by what
          matters to you and apply in one click — no account required.
        </p>

        <JobSearch />
      </div>
    </main>
  );
}

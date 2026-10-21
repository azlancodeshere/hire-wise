import type { Metadata } from "next";
import JobSearch from "@/components/JobSearch";

export const metadata: Metadata = {
  title: "Find Jobs",
  description:
    "Browse open roles across engineering, design, data and marketing. Filter by role, location and job type on Surhires.",
  alternates: {
    canonical: "https://surhires.vercel.app/jobs",
  },
  openGraph: {
    title: "Find Jobs on Surhires",
    description:
      "Browse open roles across engineering, design, data and marketing. Filter by role, location and job type.",
    url: "https://surhires.vercel.app/jobs",
  },
  twitter: {
    card: "summary",
    title: "Find Jobs on Surhires",
    description:
      "Browse open roles across engineering, design, data and marketing.",
  },
};

export default function JobsPage() {
  return (
    <main className="bg-warm-50 px-4 py-10 text-navy-950 sm:px-6 sm:py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-bold uppercase tracking-widest text-brand-700">
          Explore opportunities
        </p>

        <h1 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl md:text-5xl">
          Find your next opportunity
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
          Every listing shows the salary band upfront. Filter by what
          matters to you and apply in one click — no account required.
        </p>

        <JobSearch />
      </div>
    </main>
  );
}

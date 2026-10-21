"use client";

import { useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Brightlayer Systems",
    location: "Bengaluru",
    type: "Full-time",
    salary: "₹18–26 LPA",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Nimbus Retail",
    location: "Remote",
    type: "Full-time",
    salary: "₹12–18 LPA",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Backend Developer (Node.js)",
    company: "CloudWorks",
    location: "Delhi",
    type: "Full-time",
    salary: "₹14–22 LPA",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "Growth Marketing Intern",
    company: "Saffron Media",
    location: "Remote",
    type: "Internship",
    salary: "₹25,000 / month",
    posted: "1 day ago",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Meridian Logistics",
    location: "Pune",
    type: "Full-time",
    salary: "₹9–14 LPA",
    posted: "4 days ago",
  },
  {
    id: 6,
    title: "UI/UX Design Intern",
    company: "Pixel & Pine",
    location: "Remote",
    type: "Internship",
    salary: "₹20,000 / month",
    posted: "Today",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudWorks",
    location: "Bengaluru",
    type: "Contract",
    salary: "₹1.2L / day",
    posted: "5 days ago",
  },
  {
    id: 8,
    title: "Customer Success Manager",
    company: "Nimbus Retail",
    location: "Pune",
    type: "Full-time",
    salary: "₹10–15 LPA",
    posted: "1 week ago",
  },
];

const locations = ["Remote", "Bengaluru", "Delhi", "Pune"];
const jobTypes = ["Full-time", "Internship", "Contract"];

export default function JobSearch() {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(false);

  const trimmedRole = role.trim().toLowerCase();
  const filteredJobs = jobs.filter((job) => {
    const matchesRole =
      trimmedRole === "" ||
      job.title.toLowerCase().includes(trimmedRole) ||
      job.company.toLowerCase().includes(trimmedRole);
    const matchesLocation = location === "" || job.location === location;
    const matchesType = jobType === "" || job.type === jobType;
    return matchesRole && matchesLocation && matchesType;
  });

  const hasActiveFilters = role.trim() !== "" || location !== "" || jobType !== "";

  function clearFilters() {
    setRole("");
    setLocation("");
    setJobType("");
    setFiltersApplied(false);
  }

  return (
    <>
      
      <form
        role="search"
        aria-label="Filter jobs"
        onSubmit={(event) => {
          event.preventDefault();
          setFiltersApplied(true);
        }}
        className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-4"
      >
        <div className="md:col-span-1">
          <label htmlFor="role" className="mb-2 block text-sm font-bold text-navy-950">
            Role or company
          </label>
          <input
            id="role"
            type="search"
            placeholder="e.g. Frontend Developer"
            value={role}
            onChange={(event) => {
              setRole(event.target.value);
              setFiltersApplied(true);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-brand-700"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-bold text-navy-950"
          >
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
              setFiltersApplied(true);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-brand-700"
          >
            <option value="">All locations</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="jobType"
            className="mb-2 block text-sm font-bold text-navy-950"
          >
            Job type
          </label>
          <select
            id="jobType"
            value={jobType}
            onChange={(event) => {
              setJobType(event.target.value);
              setFiltersApplied(true);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-brand-700"
          >
            <option value="">All types</option>
            {jobTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end gap-3">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800"
          >
            Apply filters
          </button>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 font-semibold text-navy-950 shadow-sm transition hover:bg-warm-100 hover:border-slate-400"
            >
              Clear
            </button>
          )}
        </div>
      </form>

      
      <div className="mt-10">
        <h2 className="mb-6 text-xl font-bold text-navy-950" aria-live="polite">
          {filteredJobs.length}{" "}
          {filteredJobs.length === 1 ? "opportunity" : "opportunities"} found
          {filtersApplied && hasActiveFilters ? " with your filters" : ""}
        </h2>

        {filteredJobs.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {filteredJobs.map((job) => (
              <li
                key={job.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-brand-700">
                      {job.type}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold text-navy-950">
                      {job.title}
                    </h3>
                    <p className="mt-1 font-medium text-slate-700">{job.company}</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-base font-bold text-white shadow-sm">
                    {job.company.charAt(0)}
                  </div>
                </div>

                <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-4 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-medium text-slate-600">Location:</dt>
                    <dd className="font-semibold text-navy-950">{job.location}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-slate-600">Salary:</dt>
                    <dd className="font-semibold text-navy-950">{job.salary}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-slate-600">Posted:</dt>
                    <dd className="font-semibold text-navy-950">{job.posted}</dd>
                  </div>
                </dl>

                <div className="mt-5 pt-1">
                  <a
                    href={`mailto:jobs@surhires.example?subject=Application for ${job.title}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800"
                  >
                    Apply now <span aria-hidden="true">→</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
            <div
              aria-hidden="true"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-2xl font-bold text-brand-700"
            >
              ?
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-950">
              No jobs match your filters
            </h3>
            <p className="mx-auto mt-3 max-w-md text-slate-700">
              Try widening your search — clear specific filters or search for a broader title like &ldquo;Developer&rdquo; or &ldquo;Designer&rdquo;.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-lg bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}

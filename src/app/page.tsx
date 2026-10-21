import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const featuredRoles = [
  {
    title: "Senior Frontend Developer",
    company: "Brightlayer Systems",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    salary: "₹18–26 LPA",
    tag: "Engineering",
  },
  {
    title: "Product Designer",
    company: "Nimbus Retail",
    location: "Remote",
    type: "Full-time",
    salary: "₹12–18 LPA",
    tag: "Design",
  },
  {
    title: "Data Analyst",
    company: "Meridian Logistics",
    location: "Pune · On-site",
    type: "Full-time",
    salary: "₹9–14 LPA",
    tag: "Data",
  },
  {
    title: "Growth Marketing Intern",
    company: "Saffron Media",
    location: "Remote",
    type: "Internship",
    salary: "₹25,000 / month",
    tag: "Marketing",
  },
];

const testimonials = [
  {
    quote:
      "We shortlisted three solid frontend candidates within a week. Surhires cut our screening time roughly in half.",
    name: "Ananya Rao",
    role: "Head of Talent, Brightlayer Systems",
  },
  {
    quote:
      "I applied on a Tuesday and had two interviews booked by Friday. The role descriptions were refreshingly honest.",
    name: "Karthik Menon",
    role: "Frontend Developer",
  },
  {
    quote:
      "As a small studio we never had a hiring budget. The free tier actually worked — our first designer came through Surhires.",
    name: "Priya Sharma",
    role: "Co-founder, Pixel & Pine",
  },
];

const faqs = [
  {
    question: "Is Surhires free for job seekers?",
    answer:
      "Yes. Browsing roles, applying and creating your profile are completely free for candidates. We never charge application fees.",
  },
  {
    question: "How quickly can I expect candidates after posting a job?",
    answer:
      "Most employers see their first relevant applications within 48 hours. Roles promoted on our homepage newsletter typically gather 30–50 applicants in the first week.",
  },
  {
    question: "Can I post a job for free?",
    answer:
      "Yes — the Starter plan lets you run one active listing at a time with unlimited duration. Paid plans add more listings, candidate management and priority support.",
  },
  {
    question: "Do you support hiring for internships and contract roles?",
    answer:
      "Absolutely. Alongside full-time roles you can post internships, part-time and contract openings, and candidates can filter by all of these types.",
  },
];

export default function Home() {
  return (
    <main className="bg-warm-50 text-navy-950">
      {/* Hero — dual CTA for candidates and employers */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">
            India&apos;s hiring platform for growing teams
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Hire faster.
            <br />
            <span className="text-brand-700">Find work that fits.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Surhires brings employers and job seekers into one focused
            space — clear role descriptions, honest salaries and a hiring
            process that respects everyone&apos;s time.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/employers"
              className="rounded-lg bg-brand-700 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800"
            >
              Hire faster <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/jobs"
              className="rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-navy-900 shadow-sm transition hover:border-brand-600 hover:text-brand-700 active:bg-slate-50"
            >
              Find a job <span aria-hidden="true">→</span>
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            <div>
              <dt className="text-sm text-slate-500">Avg. time-to-hire</dt>
              <dd className="mt-1 text-2xl font-bold text-navy-900">9 days</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Open roles</dt>
              <dd className="mt-1 text-2xl font-bold text-navy-900">1,200+</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Companies hiring</dt>
              <dd className="mt-1 text-2xl font-bold text-navy-900">340</dd>
            </div>
          </dl>
        </div>

        {/* Hero visual — sample matches card */}
        <div className="relative rounded-3xl bg-brand-100 p-6 sm:p-10">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500">Matched for you</p>
                <h2 className="mt-1 text-xl font-bold text-navy-900">
                  New roles this week
                </h2>
              </div>
              <Link
                href="/jobs"
                className="rounded-full bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
              >
                View all
              </Link>
            </div>

            <ul className="mt-7 space-y-4">
              {featuredRoles.map((role) => (
                <li
                  key={role.title}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-brand-500"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-base font-bold text-white">
                    {role.company.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-navy-900">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 truncate text-sm text-slate-500">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-brand-700">
                    {role.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute -bottom-4 -left-2 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-lg sm:-left-5">
            <p className="text-sm font-bold text-navy-900">
              3 new matches today
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Based on your saved preferences
            </p>
          </div>
        </div>
      </section>

      {/* Employer logo strip */}
      <section
        aria-label="Companies that hire on Surhires"
        className="border-y border-slate-200 bg-white py-10"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-center text-sm font-medium uppercase tracking-widest text-slate-500">
            Trusted by teams across India
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {[
              "Brightlayer",
              "Nimbus Retail",
              "Meridian Logistics",
              "Saffron Media",
              "Pixel & Pine",
              "CloudWorks",
            ].map((company) => (
              <li
                key={company}
                className="text-lg font-bold tracking-tight text-slate-400 transition hover:text-navy-900"
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-brand-700">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Three steps to a better match.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Whether you are building a career or building a team,
              we keep the process short and predictable.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create your profile",
                body: "Candidates build a profile in minutes; employers describe the role, salary band and location upfront.",
              },
              {
                step: "02",
                title: "Get matched",
                body: "Our filters surface relevant roles for candidates and vetted applicants for employers — no spray-and-pray.",
              },
              {
                step: "03",
                title: "Interview and hire",
                body: "Schedule interviews directly from your dashboard and keep every conversation in one place.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-brand-700">{item.step}</p>
                <h3 className="mt-4 text-xl font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured roles */}
      <section className="border-y border-slate-200 bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold uppercase tracking-widest text-brand-700">
                Featured roles
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Fresh openings, updated daily.
              </h2>
            </div>
            <Link
              href="/jobs"
              className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-navy-900 transition hover:border-brand-600 hover:text-brand-700"
            >
              Browse all jobs <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredRoles.map((role) => (
              <li
                key={role.title}
                className="flex flex-col rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
              >
                <span className="inline-flex w-fit rounded-full bg-warm-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
                  {role.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{role.company}</p>
                <p className="mt-3 text-sm text-slate-500">{role.location}</p>
                <p className="mt-auto pt-4 text-sm font-semibold text-navy-900">
                  {role.salary}
                </p>
                <p className="mt-1 text-xs font-medium text-brand-700">
                  {role.type}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-brand-700">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Both sides of the hire, in their words.
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span aria-hidden="true" className="text-4xl font-bold text-brand-100">
                  &ldquo;
                </span>
                <blockquote className="mt-2 leading-7 text-slate-700">
                  {item.quote}
                </blockquote>
                <p className="mt-6 border-t border-slate-200 pt-5">
                  <span className="font-semibold text-navy-900">{item.name}</span>
                  <span className="mt-0.5 block text-sm text-slate-500">
                    {item.role}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200 bg-white px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div>
            <p className="font-semibold uppercase tracking-widest text-brand-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Still curious? Write to us at{" "}
              <a
                href="mailto:hello@surhires.example"
                className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                hello@surhires.example
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-2">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-navy-900 px-7 py-12 text-white sm:px-12 sm:py-16">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Ready for what comes next?
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">
            Post your first job in under ten minutes — or browse roles
            that respect your skills and your time.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/jobs"
              className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-navy-950 transition hover:bg-brand-100"
            >
              Explore jobs
            </Link>
            <Link
              href="/employers#post-job"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-navy-800"
            >
              Post a job
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

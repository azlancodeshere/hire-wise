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
    
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:gap-12 md:px-12 md:py-24 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">
            India&apos;s hiring platform for growing teams
          </p>

          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl md:text-5xl lg:text-6xl">
            Hire faster.
            <br />
            <span className="text-brand-700">Find work that fits.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
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
              className="rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-navy-950 shadow-sm transition hover:border-brand-700 hover:text-brand-700 active:bg-slate-50"
            >
              Find a job <span aria-hidden="true">→</span>
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 sm:gap-6">
            <div>
              <dt className="text-sm font-medium text-slate-700">Avg. time-to-hire</dt>
              <dd className="mt-1 text-xl font-bold text-navy-950 sm:text-2xl">9 days</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-700">Open roles</dt>
              <dd className="mt-1 text-xl font-bold text-navy-950 sm:text-2xl">1,200+</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-700">Companies hiring</dt>
              <dd className="mt-1 text-xl font-bold text-navy-950 sm:text-2xl">340</dd>
            </div>
          </dl>
        </div>

        
        <div className="relative rounded-3xl bg-brand-100 p-4 sm:p-6 md:p-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-brand-700">Matched for you</p>
                <h2 className="mt-1 text-xl font-bold text-navy-950">
                  New roles this week
                </h2>
              </div>
              <Link
                href="/jobs"
                className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
              >
                View all
              </Link>
            </div>

            <ul className="mt-7 space-y-4">
              {featuredRoles.map((role) => (
                <li
                  key={role.title}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-500 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-base font-bold text-white">
                    {role.company.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-navy-950">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 truncate text-sm font-medium text-slate-700">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-brand-700">
                    {role.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:absolute sm:-bottom-4 sm:-left-5 sm:mt-0">
            <p className="text-sm font-bold text-navy-950">
              3 new matches today
            </p>
            <p className="mt-1 text-xs font-medium text-slate-600">
              Based on your saved preferences
            </p>
          </div>
        </div>
      </section>

    
      <section
        aria-label="Companies that hire on Surhires"
        className="border-y border-slate-200 bg-white py-10"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600">
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
                className="text-lg font-bold tracking-tight text-navy-900/80 transition hover:text-brand-700"
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      </section>

      
      <section className="px-4 py-14 sm:px-6 sm:py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-widest text-brand-700">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Three steps to a better match.
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
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
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-brand-700">{item.step}</p>
                <h3 className="mt-4 text-xl font-bold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

     
      <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-bold uppercase tracking-widest text-brand-700">
                Featured roles
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
                Fresh openings, updated daily.
              </h2>
            </div>
            <Link
              href="/jobs"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-navy-950 shadow-sm transition hover:border-brand-700 hover:text-brand-700"
            >
              Browse all jobs <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredRoles.map((role) => (
              <li
                key={role.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
              >
                <span className="inline-flex w-fit rounded-full border border-brand-200 bg-warm-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
                  {role.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-950">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{role.company}</p>
                <p className="mt-2 text-sm text-slate-600">{role.location}</p>
                <p className="mt-auto pt-4 text-sm font-bold text-navy-950">
                  {role.salary}
                </p>
                <p className="mt-1 text-xs font-bold text-brand-700">
                  {role.type}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

     
      <section id="testimonials" className="px-4 py-14 sm:px-6 sm:py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-widest text-brand-700">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Both sides of the hire, in their words.
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span aria-hidden="true" className="text-4xl font-bold text-brand-700">
                  &ldquo;
                </span>
                <blockquote className="mt-2 leading-7 text-slate-800 font-normal">
                  {item.quote}
                </blockquote>
                <p className="mt-6 border-t border-slate-200 pt-5">
                  <span className="font-bold text-navy-950">{item.name}</span>
                  <span className="mt-0.5 block text-sm font-medium text-slate-700">
                    {item.role}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    
      <section id="faq" className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-widest text-brand-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Still curious? Write to us at{" "}
              <a
                href="mailto:hello@surhires.example"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
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

      
      <section className="px-4 py-14 sm:px-6 sm:py-20 md:px-12">
        <div className="mx-auto max-w-7xl rounded-2xl bg-navy-950 px-5 py-10 text-white shadow-xl sm:rounded-3xl sm:px-12 sm:py-16">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Ready for what comes next?
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-200 font-normal">
            Post your first job in under ten minutes — or browse roles
            that respect your skills and your time.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/jobs"
              className="rounded-lg bg-brand-500 px-6 py-3.5 font-bold text-navy-950 shadow-sm transition hover:bg-brand-200 active:bg-brand-200"
            >
              Explore jobs
            </Link>
            <Link
              href="/employers#post-job"
              className="rounded-lg border border-slate-400 bg-navy-900/60 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-navy-800 hover:border-white"
            >
              Post a job
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

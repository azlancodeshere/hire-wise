import type { Metadata } from "next";
import Link from "next/link";
import PostJobForm from "@/components/PostJobForm";

export const metadata: Metadata = {
  title: "For Employers — Pricing & Job Posting",
  description:
    "Post a job on Surhires and reach vetted candidates fast. Compare Starter, Growth and Scale plans for teams of every size.",
  openGraph: {
    title: "Hire on Surhires — Plans & Job Posting",
    description:
      "Post a job and reach vetted candidates fast. Compare Starter, Growth and Scale plans.",
  },
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "forever",
    description: "For teams hiring their first candidate.",
    features: [
      "1 active job listing",
      "Candidate applications by email",
      "Standard listing placement",
      "Email support",
    ],
    cta: "Start for free",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹2,999",
    priceNote: "per month",
    description: "For growing teams ready to hire faster.",
    features: [
      "5 active job listings",
      "Candidate management dashboard",
      "Featured listing placement",
      "Priority support within 4 hours",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    priceNote: "annual contract",
    description: "For teams hiring across multiple roles.",
    features: [
      "Unlimited job listings",
      "Advanced hiring tools & reports",
      "Dedicated account manager",
      "API & ATS integrations",
    ],
    cta: "Talk to sales",
    popular: false,
  },
];

export default function EmployersPage() {
  return (
    <main className="bg-warm-50 text-navy-950">
      
      <section className="px-6 py-16 text-center md:px-12 md:py-24">
        <p className="font-bold uppercase tracking-widest text-brand-700">
          For employers
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-navy-950 md:text-6xl">
          Find the people who move your business forward.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          Reach talented people, manage applications in one place and
          build a team ready for what comes next — without the
          agency fees.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#post-job"
            className="rounded-lg bg-brand-700 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800"
          >
            Post a job <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="#plans"
            className="rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-navy-950 shadow-sm transition hover:border-brand-700 hover:text-brand-700"
          >
            Compare plans
          </Link>
        </div>
      </section>

     
      <section
        aria-label="Surhires hiring results"
        className="border-y border-slate-200 bg-white py-12"
      >
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {[
            ["48 hrs", "to first applications"],
            ["9 days", "average time-to-hire"],
            ["12,000+", "candidates in network"],
            ["92%", "renew after first month"],
          ].map(([stat, label]) => (
            <div key={label}>
              <dd className="text-3xl font-bold text-navy-950">{stat}</dd>
              <dt className="mt-2 text-sm font-medium text-slate-700">{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      
      <section id="plans" className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-brand-700">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy-950 md:text-4xl">
              Plans that grow with your team
            </h2>
            <p className="mt-4 text-slate-700">
              Start free. Upgrade when your hiring pipeline needs more
              reach. Cancel anytime.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <li
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition hover:shadow-md ${
                  plan.popular
                    ? "border-brand-600 shadow-lg ring-2 ring-brand-600"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-7 inline-flex rounded-full bg-brand-700 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    Most popular
                  </span>
                )}

                <h3 className="text-xl font-bold text-navy-950">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-navy-950">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-slate-600">{plan.priceNote}</span>
                </p>
                <p className="mt-3 min-h-12 leading-6 text-slate-700">
                  {plan.description}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-slate-800">
                      <span aria-hidden="true" className="font-bold text-brand-700">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#post-job"
                  className={`mt-8 block rounded-lg px-4 py-3 text-center font-semibold shadow-sm transition ${
                    plan.popular
                      ? "bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-800"
                      : "border border-slate-300 bg-white text-navy-950 hover:bg-warm-100 hover:border-slate-400"
                  }`}
                >
                  {plan.cta}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm font-medium text-slate-600">
            Prices in INR, exclusive of GST. Illustrative plans for this
            assignment — no payment is collected.
          </p>
        </div>
      </section>

     
      <section
        id="post-job"
        className="border-t border-slate-200 bg-white px-6 py-16 md:px-12 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-brand-700">
              Start hiring
            </p>
            <h2 className="mt-4 text-3xl font-bold text-navy-950 md:text-4xl">
              Tell us about the role.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-700">
              Share a few details about your opening. This demo form
              validates your information in the browser and shows a
              confirmation message — no backend involved.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Free to post your first role",
                "Salary band shown to every candidate",
                "Applications straight to your inbox",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-slate-800 font-medium">
                  <span aria-hidden="true" className="font-bold text-brand-700">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <PostJobForm />
        </div>
      </section>
    </main>
  );
}

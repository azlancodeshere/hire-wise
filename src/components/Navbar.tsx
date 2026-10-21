"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find Jobs" },
  { href: "/employers#plans", label: "Pricing" },
  { href: "/employers", label: "For Employers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-900"
        >
          <Image
            src="/surhires-mark.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
          sur<span className="text-brand-700">hires</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-1 py-2 font-medium text-slate-700 transition hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/employers#post-job"
          className="hidden rounded-lg bg-brand-700 px-5 py-2.5 font-semibold text-white transition hover:bg-brand-800 active:bg-brand-800 md:inline-flex"
        >
          Hire Talent
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-300 px-3 py-2 font-semibold text-navy-900 transition hover:bg-slate-50 active:bg-slate-100 md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/employers#post-job"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-brand-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-brand-800"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

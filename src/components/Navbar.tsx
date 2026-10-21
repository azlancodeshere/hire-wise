"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find Jobs" },
  { href: "/employers#plans", label: "Pricing" },
  { href: "/employers", label: "For Employers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

 
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function isLinkActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/employers")) {
      return pathname === "/employers";
    }
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-navy-950 transition hover:opacity-90"
        >
          <Image
            src="/surhires-mark.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span>
            sur<span className="text-brand-700">hires</span>
          </span>
        </Link>

       
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-1 py-1.5 text-sm font-semibold transition ${
                  active
                    ? "text-brand-700 underline decoration-brand-700 decoration-2 underline-offset-8"
                    : "text-navy-900 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        
        <Link
          href="/employers#post-job"
          className="hidden rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800 md:inline-flex"
        >
          Hire Talent
        </Link>

       
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-navy-950 shadow-sm transition hover:bg-warm-100 hover:border-slate-400 active:bg-slate-100 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5 text-navy-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </nav>

   
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-semibold transition ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-navy-950 hover:bg-warm-100 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/employers#post-job"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-brand-700 px-4 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-brand-800 active:bg-brand-800"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

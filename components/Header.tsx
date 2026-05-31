"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-[#fffaf3]/88 backdrop-blur-xl">
      <div className="container-shell flex min-h-18 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#274934] text-white shadow-[0_10px_24px_rgba(39,73,52,0.22)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <span>
            <span className="heading-display block text-2xl font-semibold text-[#233629]">
              OrganoSilvia
            </span>
            <span className="block text-xs uppercase tracking-[0.24em] text-[#748477]">
              Organic skincare
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#49594d] transition hover:text-[#1f3325]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MarketplaceButtons compact emphasize="amazon" />
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#5d7c6124] bg-white/70 text-[#274934] md:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#5d7c6117] bg-[#fffdf8] md:hidden">
          <div className="container-shell flex flex-col gap-5 py-5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#425347]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <MarketplaceButtons compact emphasize="amazon" />
          </div>
        </div>
      ) : null}
    </header>
  );
}

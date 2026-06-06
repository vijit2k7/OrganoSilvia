import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, ShoppingBag } from "lucide-react";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { brandAssets, marketplaceLinks, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#5d7c6117] bg-[#faf6ee] pb-28 pt-12 md:pb-12">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="overflow-hidden rounded-full shadow-[0_10px_24px_rgba(39,73,52,0.18)] ring-1 ring-[#5d7c6120]">
              <Image
                src={brandAssets.logo}
                alt="OrganoSilvia logo"
                width={52}
                height={52}
                className="h-[52px] w-[52px] object-cover"
              />
            </span>
            <h2 className="heading-display text-3xl text-[#203223]">OrganoSilvia</h2>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#5e6d62]">
            Premium natural skincare for Indian skin, built around lightweight sunscreen,
            gentle daily face wash, and simple routines that fit everyday life.
          </p>
          <div className="mt-6 hidden sm:block">
            <MarketplaceButtons compact />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#274934]">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#5b6b60]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#203223]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#274934]">
            Marketplaces
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#5b6b60]">
            <li>
              <Link
                href={marketplaceLinks.amazon}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#203223]"
              >
                <ShoppingBag className="h-4 w-4" />
                Amazon
              </Link>
            </li>
            <li>
              <Link
                href={marketplaceLinks.flipkart}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#203223]"
              >
                <ShoppingBag className="h-4 w-4" />
                Flipkart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#274934]">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#5b6b60]">
            <li className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hello@organosilvia.com
            </li>
            <li className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              @organosilvia
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              India
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { ShoppingBag } from "lucide-react";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";

export function MobileStickyCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden">
      <div className="pointer-events-auto rounded-[1.7rem] border border-[#d9ccb2] bg-[rgba(255,251,243,0.96)] p-3 shadow-[0_-12px_40px_rgba(40,58,46,0.12)] backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between gap-3 px-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d7a6f]">
              Ready to buy
            </p>
            <p className="text-sm font-medium text-[#203223]">
              Shop the organic SPF 50++ sunscreen or face wash
            </p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#264434] text-white">
            <ShoppingBag className="h-4 w-4" />
          </span>
        </div>
        <MarketplaceButtons compact emphasize="amazon" />
      </div>
    </div>
  );
}

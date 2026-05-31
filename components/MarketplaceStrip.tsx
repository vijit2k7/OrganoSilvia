import { ShieldCheck, Store, Truck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { purchaseReasons } from "@/lib/site";

const utilityPoints = [
  { label: "Amazon & Flipkart availability", icon: Store },
  { label: "Secure marketplace checkout", icon: ShieldCheck },
  { label: "Convenient repeat ordering", icon: Truck },
];

export function MarketplaceStrip() {
  return (
    <section aria-label="Marketplace trust" className="pb-4">
      <div className="container-shell">
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[#d8cfbf] bg-[#fffaf2] p-6 shadow-[0_20px_60px_rgba(60,77,54,0.08)]">
              <p className="section-kicker">Conversion flow</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#203223] sm:text-4xl">
                Learn on site. Buy on trusted marketplaces.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#5d6d62]">
                This landing page is designed to answer questions fast, build brand
                confidence, and then route customers to the channel they already trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {utilityPoints.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-full border border-[#e4d8bc] bg-white px-4 py-2 text-sm text-[#375244]"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#b48b3f]" />
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {purchaseReasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <Reveal key={reason.title} delay={index * 0.06}>
                    <article className="glass-panel rounded-[1.6rem] p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#264434] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#203223]">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#5a6a60]">
                        {reason.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

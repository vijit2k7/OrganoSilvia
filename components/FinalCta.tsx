import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="section-space pt-2">
      <div className="container-shell">
        <Reveal>
          <div className="soft-ring overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,#244233_0%,#365a42_42%,#d8c08b_100%)] px-6 py-10 text-white shadow-[0_30px_90px_rgba(35,59,46,0.24)] sm:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#efe7d0]">
                  Organic daily care
                </p>
                <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
                  Start with the SPF 50++ Sunscreen and Organic Face Wash
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#eef1eb]">
                  Build a simple organic routine around the two hero products, then
                  choose the marketplace that fits your buying habit.
                </p>
              </div>
              <div className="[&>div>a:first-child]:bg-white [&>div>a:first-child]:text-[#1f3427] [&>div>a:nth-child(2)]:border-white/40 [&>div>a:nth-child(2)]:bg-white/10 [&>div>a:nth-child(2)]:text-white">
                <MarketplaceButtons emphasize="amazon" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

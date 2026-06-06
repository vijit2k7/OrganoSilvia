import Image from "next/image";
import { Flower2, Sparkles } from "lucide-react";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { ProductImageDeck } from "@/components/ProductImageDeck";
import { Reveal } from "@/components/Reveal";
import { products, signatureAyurveda } from "@/lib/site";

export function SignatureAyurveda() {
  const ayurvedaProduct = products.find((product) =>
    product.name.includes("Shata Dhauta Ghrita"),
  );

  return (
    <section className="section-soft section-space">
      <div className="container-shell">
        <Reveal>
          <div className="soft-ring overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#fcf6e9_0%,#f4e5c5_42%,#fffdf7_100%)] shadow-[0_26px_80px_rgba(72,72,44,0.12)]">
            <div className="grid items-center gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-12">
              <div className="relative">
                <div className="premium-card rounded-[2rem] bg-white/68 p-5">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#89683a]">
                    <span>{signatureAyurveda.kicker}</span>
                    <Flower2 className="h-4 w-4" />
                  </div>
                  <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,#fffaf1,#f7ead2)] p-4">
                    {ayurvedaProduct ? (
                      <ProductImageDeck
                        alt={signatureAyurveda.title}
                        images={ayurvedaProduct.images}
                        aspect="hero"
                      />
                    ) : (
                      <Image
                        src={signatureAyurveda.image}
                        alt={signatureAyurveda.title}
                        width={440}
                        height={520}
                        className="mx-auto w-full max-w-[290px]"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <span className="section-kicker">{signatureAyurveda.kicker}</span>
                <h2 className="heading-display mt-5 max-w-3xl text-4xl text-[#2f2515] sm:text-5xl lg:text-6xl">
                  {signatureAyurveda.statement}
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#665744]">
                  {signatureAyurveda.description}
                </p>

                <div className="mt-6 rounded-[1.6rem] border border-[#dfca9f] bg-white/72 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a6731]">
                    <Sparkles className="h-4 w-4" />
                    Ritual highlights
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {signatureAyurveda.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.1rem] bg-[#fff8eb] px-4 py-3 text-sm leading-7 text-[#574937]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="mt-6 rounded-[1.6rem] border border-[#eadab7] bg-[rgba(255,251,242,0.84)] px-5 py-4 text-base italic leading-8 text-[#6b5738]">
                  “{signatureAyurveda.quote}”
                </blockquote>

                <div className="mt-7">
                  <MarketplaceButtons emphasize="amazon" links={ayurvedaProduct?.links} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

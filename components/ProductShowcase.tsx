import Image from "next/image";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { ProductImageDeck } from "@/components/ProductImageDeck";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/lib/site";

export function ProductShowcase() {
  return (
    <section id="products" className="section-space scroll-mt-28">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            kicker="Product showcase"
            title="Hero products lead the story, but the brand is built as a full organic skincare range"
            description="OrganoSilvia is not limited to two products. The core story begins with sunscreen, face wash, and the Ayurveda-led Shata Dhauta Ghrita cream, while serum, face moisturizer, face oil, and day and night creams expand the range."
          />
        </Reveal>

        <div className="mt-4">
          <div className="fade-divider" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08}>
              <article
                className={`group premium-card soft-ring flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-1 ${
                  product.name.includes("Shata Dhauta")
                    ? "border-[#dabb84] shadow-[0_24px_80px_rgba(125,95,33,0.14)]"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${product.accent} p-6 sm:p-8`}
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4b5a4f]">
                      {product.bestFor}
                    </span>
                    <span className="inline-flex rounded-full bg-[#274934] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      {product.texture}
                    </span>
                  </div>
                  {product.images.length > 1 ? (
                    <ProductImageDeck alt={product.name} images={product.images} />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={480}
                      height={520}
                      className="mx-auto h-[320px] w-auto transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02] sm:h-[360px]"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-[#203223]">{product.name}</h3>
                    <Sparkle className="h-5 w-5 text-[#caa55b]" />
                  </div>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[#5a6a60]">
                    {product.description}
                  </p>
                  <p className="mt-4 rounded-[1.2rem] bg-[#fffaf1] px-4 py-4 text-sm leading-7 text-[#476052]">
                    {product.story}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {product.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 rounded-full bg-white/78 px-4 py-2.5 text-sm text-[#375244]"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#cda860]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-[1.2rem] border border-[#5d7c6117] bg-[#fffef9] p-4 text-sm text-[#526258]">
                    <span className="font-semibold text-[#274934]">Skin type suitability:</span>{" "}
                    {product.skinType}
                  </div>

                  {/* <div
                    className={`mt-4 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                      product.name.includes("Shata Dhauta")
                        ? "border-[#ddc285] text-[#8a6731]"
                        : "border-[#d8cfbf] text-[#536559]"
                    }`}
                  >
                    {product.marketplace}
                  </div> */}

                  <div className="mt-6 pt-2">
                    <MarketplaceButtons
                      compact
                      links={product.links}
                      emphasize={index === 0 ? "amazon" : index === 1 ? "flipkart" : undefined}
                    />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#355240]">
                    Buy after comparing routine fit, texture, and organic positioning
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

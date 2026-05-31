"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { heroStats, products, rangeHighlights, trustBadges } from "@/lib/site";
import { useEffect, useState } from "react";

const floatingItems = [
  { label: "Aloe vera", className: "left-[6%] top-[14%]", color: "bg-[#f1f8e8]" },
  { label: "Neem", className: "right-[10%] top-[18%]", color: "bg-[#eef6ec]" },
  { label: "Turmeric", className: "left-[18%] bottom-[14%]", color: "bg-[#f8edd2]" },
  { label: "Sun glow", className: "right-[8%] bottom-[18%]", color: "bg-[#fff1d4]" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroProducts = products.slice(0, 3);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(false);

  useEffect(() => {
    if (reduceMotion || heroProducts.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveProductIndex((current) => (current + 1) % heroProducts.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [heroProducts.length, reduceMotion]);

  const activeProduct = heroProducts[activeProductIndex];
  const activeHeroImage =
    hoveredImage && activeProduct.heroImages?.hover
      ? activeProduct.heroImages.hover
      : activeProduct.heroImages?.default || activeProduct.images[0];
  const heroStatsContent = (
    <>
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[1.5rem] border border-[#e5dcc8] bg-white/70 px-4 py-4 shadow-[0_14px_34px_rgba(61,86,66,0.07)]"
        >
          <div className="text-2xl font-extrabold text-[#203223]">{stat.value}</div>
          <div className="mt-1 text-sm leading-6 text-[#607064]">{stat.label}</div>
        </div>
      ))}
    </>
  );

  return (
    <section className="relative overflow-hidden pb-8 pt-8 sm:pb-12 sm:pt-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top,rgba(214,229,208,0.95),transparent_44%),radial-gradient(circle_at_80%_20%,rgba(247,225,182,0.42),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0))]" />
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[1fr_0.98fr] lg:gap-10">
        <div>
          <motion.span
            className="section-kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Organic skincare for everyday India
          </motion.span>
          <motion.div
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#e5dcc8] bg-white/80 px-3 py-2 text-sm text-[#4d5f52] shadow-[0_10px_30px_rgba(72,88,66,0.08)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Star className="h-4 w-4 fill-[#d1a95f] text-[#d1a95f]" />
            Organic, natural, chemical-free skincare with Ayurveda and modern glow in balance
          </motion.div>
          <motion.h1
            className="heading-display text-balance mt-5 max-w-4xl text-[2.9rem] text-[#1d2f20] sm:text-6xl lg:text-[5.05rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Organic Skincare Rooted in Natural Ingredients and Chemical-Free Care
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-base leading-8 text-[#58685d] sm:text-lg lg:text-[1.2rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Discover a growing skincare range crafted for Indian skin, led by SPF 50++
            sunscreen, organic face wash, and Shata Dhauta Ghrita face cream, with serum,
            face oil, moisturizer, and day and night creams expanding the ritual.
          </motion.p>

          {/* <motion.div
            className="mt-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <MarketplaceButtons showExplore emphasize="amazon" />
          </motion.div> */}

          {/* <motion.div
            className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#4f6054]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-[#5d7c61]" />
              Marketplace checkout keeps buying familiar and low-friction
            </span>
            <a
              href="#products"
              className="inline-flex items-center gap-2 font-semibold text-[#264434] transition hover:gap-3"
            >
              Explore the full range first
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </motion.div> */}

          <motion.div
            className="mt-7 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            {trustBadges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="soft-ring rounded-full bg-white/70 px-4 py-3 text-sm text-[#355240] shadow-[0_10px_30px_rgba(93,124,97,0.08)]"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#5d7c61]" />
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-7 hidden gap-3 sm:grid-cols-3 md:grid"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
          >
            {heroStatsContent}
          </motion.div>

        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[610px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {floatingItems.map((item, index) => (
            <motion.div
              key={item.label}
              className={`absolute ${item.className} ${item.color} hidden rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#425647] shadow-[0_14px_34px_rgba(61,86,66,0.1)] sm:block`}
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {item.label}
            </motion.div>
          ))}

          <div className="glass-panel texture-grid soft-ring relative overflow-hidden rounded-[2.2rem] p-4 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.56),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(207,173,98,0.18),transparent_30%)]" />
            <div className="relative space-y-4">
              <div className="premium-card rounded-[1.7rem] bg-[#f3ead4] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#6f7c6f]">
                  <span>{activeProduct.bestFor}</span>
                </div>
                <div className="rounded-[1.4rem] bg-white/70 p-4">
                  <div
                    className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-[1.2rem] sm:h-[400px]"
                    onMouseEnter={() => setHoveredImage(true)}
                    onMouseLeave={() => setHoveredImage(false)}
                  >
                    <motion.div
                      key={`${activeProduct.name}-${activeHeroImage}`}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.985, y: 8 }}
                      animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <Image
                        src={activeHeroImage}
                        alt={activeProduct.name}
                        width={520}
                        height={620}
                        className="mx-auto max-h-[320px] w-auto max-w-full rounded-[1.2rem] object-contain sm:max-h-[360px]"
                        priority
                      />
                    </motion.div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#fff8ee] via-[#fff8ee]/88 to-transparent px-3 pb-3 pt-10">
                      <div className="pointer-events-auto flex gap-2">
                        {heroProducts.map((product, index) => (
                          <button
                            key={product.name}
                            type="button"
                            aria-label={`Show ${product.name}`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                              index === activeProductIndex
                                ? "w-8 bg-[#274934]"
                                : "w-2.5 bg-[#d2c5ab]"
                            }`}
                            onClick={() => setActiveProductIndex(index)}
                          />
                        ))}
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a867c]">
                          {String(activeProductIndex + 1).padStart(2, "0")} / 03
                        </div>
                        {/* <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#9aa59c]">
                          Hover for 4th image
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[#203223] sm:text-2xl">
                      {activeProduct.name}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#4f6154]">
                      {activeProduct.description}
                    </p>
                    <div className="mt-4">
                      <MarketplaceButtons compact />
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-card rounded-[1.6rem] bg-[#fdfaf3] p-5 lg:mt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#778578]">
                  Hero routine
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#203223]">
                  Cleanse. Protect. Nourish. Glow.
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[#5b6b60]">
                  {[
                    "Organic face wash for a fresh start",
                    "SPF 50++ sunscreen for everyday wear",
                    "Shata Dhauta Ghrita cream for Ayurveda-led glow care",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5d7c61]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-3 sm:grid-cols-3 md:hidden"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
        >
          {heroStatsContent}
        </motion.div>

        <motion.div
          className="rounded-[1.6rem] border border-[#e5dcc8] bg-white/66 p-4 shadow-[0_14px_34px_rgba(61,86,66,0.07)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7c6f]">
            Range vision
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {rangeHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#dcd1bd] bg-[#fffaf2] px-3 py-2 text-sm text-[#466053]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker="Frequently asked questions"
          title="Answers that remove hesitation before the marketplace click"
          description="Clear, simple FAQs help the page convert without turning into a hard sell."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <article
                key={item.question}
                className="glass-panel overflow-hidden rounded-[1.6rem]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-[#203223]">{item.question}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4eee1] text-[#274934]">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-6 text-sm leading-7 text-[#59695f]">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

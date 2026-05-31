import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { routineSteps } from "@/lib/site";

export function Routine() {
  return (
    <section id="routine" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            kicker="Morning ritual"
            title="A simple skincare routine you can actually keep up with"
            description="The best daily skincare routine is often the one that feels simple enough to repeat. This sequence ties the face wash and lightweight sunscreen together in a believable way."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {routineSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <article className="glass-panel relative rounded-[2rem] p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#274934] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {item.step}
                  </span>
                  {index < routineSteps.length - 1 ? (
                    <ArrowDown className="h-5 w-5 text-[#99ab9a] lg:rotate-[-90deg]" />
                  ) : null}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#203223]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5b6b60]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

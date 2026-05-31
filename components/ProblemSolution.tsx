import { Check, CircleAlert } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { problems, solutions } from "@/lib/site";

export function ProblemSolution() {
  return (
    <section className="section-soft section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <div className="glass-panel rounded-[2rem] p-8">
            <SectionHeading
              kicker="Why people switch"
              title="Less friction. More everyday comfort."
              description="The right skincare routine should reduce hesitation, not create more of it. OrganoSilvia is framed around the practical issues shoppers already know."
            />
            <div className="mt-8 space-y-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-3 rounded-[1.1rem] border border-[#d8cab4] bg-[#fff6ea] px-4 py-4 text-[#694d35]"
                >
                  <CircleAlert className="h-5 w-5 shrink-0" />
                  <span className="font-medium">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 0.08}>
              <article className="glass-panel rounded-[1.8rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#274934] text-white shadow-[0_14px_30px_rgba(39,73,52,0.18)]">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#203223]">{solution.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5a6a60]">{solution.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

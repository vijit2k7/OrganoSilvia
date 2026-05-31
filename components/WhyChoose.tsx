import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChoose } from "@/lib/site";

export function WhyChoose() {
  return (
    <section className="section-soft section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-panel rounded-[2rem] p-8">
            <SectionHeading
              kicker="Why choose OrganoSilvia"
              title="Built for trust, simplicity, and repeat daily use"
              description="The brand story now balances organic, natural, and chemical-free skincare with a broader product vision that includes modern essentials and Ayurveda-rooted ritual care."
            />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="glass-panel flex min-h-[150px] items-start gap-4 rounded-[1.8rem] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f3ead4] text-[#274934]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold leading-8 text-[#274133]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5d6d62]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

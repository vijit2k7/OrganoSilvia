import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ingredients } from "@/lib/site";

export function Ingredients() {
  return (
    <section id="ingredients" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            kicker="Ingredient story"
            title="Nature-inspired ingredients that feel familiar and premium"
            description="This section gives customers a cleaner path to understanding the natural skincare positioning behind the range, while keeping claims measured and brand-safe."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;

            return (
              <Reveal key={ingredient.name} delay={index * 0.06}>
                <article className="soft-ring overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/55 p-6 shadow-[0_20px_55px_rgba(53,82,64,0.08)] backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(93,124,97,0.16),rgba(207,173,98,0.2))] text-[#274934]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#203223]">{ingredient.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#58685d]">{ingredient.benefit}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

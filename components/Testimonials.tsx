import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="reviews" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            kicker="Social proof"
            title="Customer language that reduces doubt before the purchase click"
            description="Testimonials work best here when they reinforce comfort, weather fit, and ease of daily use. The phrasing stays believable and purchase-oriented."
            align="center"
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["No sticky feel", "Easy daily routine", "Marketplace-friendly purchase path"].map(
            (item) => (
              <div
                key={item}
                className="rounded-full border border-[#e3d8c1] bg-white/80 px-4 py-2 text-sm text-[#4d5f52]"
              >
                {item}
              </div>
            ),
          )}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="glass-panel relative rounded-[2rem] p-6">
                <Quote className="h-10 w-10 text-[#d6c08c]" />
                <div className="mt-4 flex gap-1 text-[#caa55b]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-[#31473a]">“{testimonial.quote}”</p>
                <div className="mt-6 border-t border-[#5d7c6114] pt-5">
                  <p className="font-semibold text-[#203223]">{testimonial.name}</p>
                  <p className="text-sm font-medium text-[#5c6e61]">{testimonial.title}</p>
                  <p className="text-sm text-[#6a7b6f]">{testimonial.city}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

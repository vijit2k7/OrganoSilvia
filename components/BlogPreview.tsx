import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/lib/site";

export function BlogPreview() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            kicker="SEO content"
            title="Helpful skincare content that keeps the brand discoverable"
            description="These article previews support SEO goals around natural skincare, daily face wash, lightweight sunscreen, and simple skincare routine queries."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <article className="group glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1">
                <div className="rounded-full bg-[#f2ead5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#776443]">
                  Skincare blog
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#203223]">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5a6a60]">{post.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#355240]">
                  Read preview <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

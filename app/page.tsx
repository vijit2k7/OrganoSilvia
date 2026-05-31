import { BlogPreview } from "@/components/BlogPreview";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ingredients } from "@/components/Ingredients";
import { MarketplaceStrip } from "@/components/MarketplaceStrip";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Routine } from "@/components/Routine";
import { SignatureAyurveda } from "@/components/SignatureAyurveda";
import { StructuredData } from "@/components/StructuredData";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">
        <Hero />
        <SignatureAyurveda />
        <MarketplaceStrip />
        <ProductShowcase />
        <ProblemSolution />
        <Ingredients />
        <Routine />
        <Testimonials />
        <WhyChoose />
        <BlogPreview />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

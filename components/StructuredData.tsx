import Script from "next/script";
import { brandAssets, faqs, products } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OrganoSilvia",
  url: "https://organosilvia.com",
  logo: `https://organosilvia.com${brandAssets.logo}`,
  sameAs: ["https://www.amazon.in/", "https://www.flipkart.com/"],
  description:
    "OrganoSilvia is an organic skincare brand focused on natural, chemical-free products including SPF 50++ sunscreen, organic face wash, Shata Dhauta Ghrita face cream, serum, moisturizer, and face oil.",
};

const productSchema = {
  "@context": "https://schema.org",
  "@graph": products.map((product) => ({
    "@type": "Product",
    name: product.name,
    category: product.bestFor,
    brand: {
      "@type": "Brand",
      name: "OrganoSilvia",
    },
    description: product.description,
    image: `https://organosilvia.com${product.image}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: product.links?.amazon ?? product.links?.flipkart ?? "https://www.amazon.in/",
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function StructuredData() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

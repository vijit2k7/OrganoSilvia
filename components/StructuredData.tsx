import Script from "next/script";
import { faqs } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OrganoSilvia",
  url: "https://organosilvia.com",
  logo: "https://organosilvia.com/og-image.svg",
  sameAs: ["https://www.amazon.in/", "https://www.flipkart.com/"],
  description:
    "OrganoSilvia is an organic skincare brand focused on natural, chemical-free products including SPF 50++ sunscreen, organic face wash, Shata Dhauta Ghrita face cream, serum, moisturizer, and face oil.",
};

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "OrganoSilvia SPF 50++ Sunscreen",
      category: "Sunscreen",
      brand: {
        "@type": "Brand",
        name: "OrganoSilvia",
      },
      description:
        "Organic SPF 50++ sunscreen for Indian skin crafted for everyday skincare routines.",
      image: "https://organosilvia.com/products/sunscreen.svg",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: "https://www.amazon.in/",
      },
    },
    {
      "@type": "Product",
      name: "OrganoSilvia Organic Face Wash",
      category: "Face Wash",
      brand: {
        "@type": "Brand",
        name: "OrganoSilvia",
      },
      description:
        "Completely organic face wash designed for a simple skincare routine and fresh-feeling cleanse.",
      image: "https://organosilvia.com/products/face-wash.svg",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: "https://www.flipkart.com/",
      },
    },
    {
      "@type": "Product",
      name: "Shata Dhauta Ghrita Face Cream",
      category: "Face Cream",
      brand: {
        "@type": "Brand",
        name: "OrganoSilvia",
      },
      description:
        "Ayurveda-inspired face cream made from A2 cow ghee washed 100 times in a copper vessel.",
      image: "https://organosilvia.com/products/shata-dhauta-ghrita.svg",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: "https://www.amazon.in/",
      },
    },
  ],
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

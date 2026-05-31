import {
  Flower2,
  BadgeCheck,
  Clock3,
  Droplets,
  Leaf,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  SunMedium,
  Trees,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const marketplaceLinks = {
  amazon: "https://www.amazon.in/",
  flipkart: "https://www.flipkart.com/",
};

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Routine", href: "#routine" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const trustBadges: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Made in India", icon: BadgeCheck },
  { label: "Organic Daily Care", icon: Droplets },
  { label: "Natural Ingredient Based", icon: Leaf },
  { label: "Chemical Free Focus", icon: ShieldCheck },
  { label: "For Men & Women", icon: UserRound },
];

export const products = [
  {
    name: "OrganoSilvia SPF 50++ Sunscreen",
    image: "/products/sunscreen.svg",
    images: [
      "/products/sunscreen/sunscreen1.JPG",
      "/products/sunscreen/sunscreen2.PNG",
      "/products/sunscreen/sunscreen3.JPG",
      "/products/sunscreen/sunscreen4.JPG",
    ],
    description:
      "An organic SPF 50++ sunscreen designed for Indian skin, with a lightweight finish that fits daily wear.",
    benefits: ["Lightweight daily comfort", "Non-sticky finish", "Made for regular daytime use"],
    skinType: "Normal, combination, oily, and outdoor-first routines",
    story: "Best for rushed mornings, humid commutes, and customers who want organic sun care to feel elegant instead of heavy.",
    bestFor: "Daily SPF 50++ protection",
    texture: "Lightweight lotion feel",
    marketplace: "Hero sunscreen",
    accent: "from-[#f7edd6] via-[#f0f6df] to-[#dbe8cf]",
  },
  {
    name: "OrganoSilvia Organic Face Wash",
    image: "/products/face-wash.svg",
    images: [
      "/products/facewash/facewash1.PNG",
      "/products/facewash/facewash2.PNG",
      "/products/facewash/facewash3.PNG",
      "/products/facewash/facewash4.jpg",
      "/products/facewash/facewash5.PNG",
    ],
    description:
      "A completely organic face wash crafted for a fresh cleanse without the tight-after feel.",
    benefits: ["Gentle everyday cleanse", "Fresh post-wash feel", "Easy morning and evening use"],
    skinType: "Normal, oily, combination, and everyday city skin",
    story: "Built for the first 30 seconds of the day when you want skin to feel clean, calm, and cared for with organic ingredients.",
    bestFor: "Daily cleanse",
    texture: "Soft fresh foam",
    marketplace: "Hero face wash",
    accent: "from-[#e7f2e3] via-[#f8f4eb] to-[#e5efe8]",
  },
  {
    name: "Shata Dhauta Ghrita Face Cream",
    image: "/products/shata-dhauta-ghrita/facecream1.PNG",
    images: [
      "/products/shata-dhauta-ghrita/facecream1.PNG",
      "/products/shata-dhauta-ghrita/facecream2.PNG",
      "/products/shata-dhauta-ghrita/facecream3.PNG",
      "/products/shata-dhauta-ghrita/facecream4.PNG",
      "/products/shata-dhauta-ghrita/facecream5.jpg",
    ],
    description:
      "An ancient Ayurveda inspired face cream made from A2 cow ghee washed 100 times in a copper vessel.",
    benefits: ["Ayurveda-led ritual care", "Rich nourishing comfort", "Ancient process, modern glow story"],
    skinType: "Dry, normal, mature, and ritual-first skincare routines",
    story: "Shata Dhauta Ghrita brings an elevated heritage story to the brand, combining the ritual of 100-times washed A2 cow ghee with a premium daily glow positioning.",
    bestFor: "Ayurvedic glow care",
    texture: "Silky cream balm feel",
    marketplace: "Hero Ayurveda cream",
    accent: "from-[#f6ead5] via-[#fbf6ed] to-[#eadcb8]",
  },
  {
    name: "OrganoSilvia Face Toner",
    image: "/products/face-toner.svg",
    images: ["/products/face-toner.svg"],
    description:
      "A refreshing organic face toner designed to complement cleansing and prep skin for the rest of the ritual.",
    benefits: ["Fresh lightweight prep", "Supports layered skincare", "Easy post-cleanse step"],
    skinType: "Normal, oily, combination, and ritual-based daily routines",
    story: "The face toner extends the brand beyond hero basics and makes the range feel more complete, balanced, and premium.",
    bestFor: "Post-cleanse balancing",
    texture: "Watery refreshing mist",
    marketplace: "Range-expanding toner",
    accent: "from-[#e8f4ef] via-[#fbf8f0] to-[#dce9e1]",
  },
];

export const heroStats = [
  { value: "6+", label: "organic skincare categories in the brand vision" },
  { value: "100x", label: "washed A2 cow ghee ritual in Shata Dhauta Ghrita" },
  { value: "3", label: "hero products leading the brand story" },
];

export const rangeHighlights = [
  "SPF 50++ Sunscreen",
  "Organic Face Wash",
  "Face Serum",
  "Day & Night Face Cream",
  "Face Oil",
  "Face Moisturizer",
];

export const signatureAyurveda = {
  title: "Shata Dhauta Ghrita Face Cream",
  image: "/products/shata-dhauta-ghrita/facecream1.PNG",
  kicker: "Signature Ayurveda hero",
  statement: "Ancient Ayurveda. Modern Glow.",
  description:
    "A signature OrganoSilvia ritual cream inspired by the classical Shata Dhauta Ghrita process and positioned as a premium bridge between heritage care and modern organic skincare.",
  highlights: [
    "Made from A2 cow ghee,kumkuma,Rose water and ghritkumari",
    "Washed 100 times for a refined ritual texture",
    "Prepared in a copper vessel story-led process",
    "Designed to feel heritage-rooted yet premium and current",
  ],
  quote:
    "This is the product that gives the brand depth. It makes OrganoSilvia feel like more than a marketplace skincare label.",
};

export const purchaseReasons = [
  {
    title: "Already available where customers shop",
    description:
      "The page educates and reassures, then hands the conversion off to Amazon and Flipkart.",
    icon: Shield,
  },
  {
    title: "Built around everyday Indian weather",
    description:
      "Messaging stays focused on organic ingredients, wearable textures, and routine simplicity.",
    icon: SunMedium,
  },
  {
    title: "Made for repeat daily use",
    description:
      "A cleaner story for people looking for chemical-free everyday skincare, not a complicated regimen.",
    icon: Clock3,
  },
];

export const problems = [
  "Sticky sunscreen",
  "Harsh face wash",
  "Dull skin",
  "Confusing skincare routine",
];

export const solutions = [
  {
    title: "Lightweight feel",
    description:
      "Comfort-first organic skincare helps the routine feel better in warm, humid, everyday Indian weather.",
  },
  {
    title: "Gentle cleanse",
    description:
      "An organic face wash experience that removes buildup without the stripped-after feeling.",
  },
  {
    title: "Daily glow support",
    description:
      "Routine-friendly organic essentials that help skin look cared for, fresh, and consistent.",
  },
  {
    title: "Simple 2-step routine",
    description:
      "Cleanse, protect, and move on with your day without overcomplicating skincare.",
  },
];

export const ingredients = [
  {
    name: "Aloe Vera",
    benefit: "Known for its soothing, cooling feel in everyday skincare routines.",
    icon: Droplets,
  },
  {
    name: "Neem",
    benefit: "A familiar botanical associated with fresh-feeling, balanced skin care.",
    icon: Trees,
  },
  {
    name: "Turmeric",
    benefit: "A golden staple often linked with bright-looking, cared-for skin rituals.",
    icon: Sparkles,
  },
  {
    name: "Green Tea",
    benefit: "Brings a clean, antioxidant-inspired story to modern natural skincare.",
    icon: Leaf,
  },
  {
    name: "Vitamin E",
    benefit: "Supports a smooth, conditioned feel that fits into daily glow routines.",
    icon: ShieldCheck,
  },
  {
    name: "Natural Oils",
    benefit: "Add softness and comfort cues without making the routine feel overdone.",
    icon: SunMedium,
  },
  {
    name: "A2 Cow Ghee",
    benefit: "Brings an Ayurveda-rooted nourishment story to ritual cream-based skincare.",
    icon: Flower2,
  },
];

export const routineSteps = [
  {
    step: "Step 1",
    title: "Cleanse with OrganoSilvia Organic Face Wash",
    description:
      "Start with a gentle cleanse to remove overnight oil, sweat, and dull surface buildup.",
  },
  {
    step: "Step 2",
    title: "Protect with OrganoSilvia SPF 50++ Sunscreen",
    description:
      "Layer organic SPF 50++ sunscreen before stepping into sun, screens, and the pace of the day.",
  },
  {
    step: "Step 3",
    title: "Glow confidently through the day",
    description:
      "Keep your routine simple, consistent, and easy enough to repeat every single morning.",
  },
];

export const testimonials = [
  {
    quote: "Finally a sunscreen that doesn’t feel sticky in Indian weather.",
    name: "Riya S.",
    city: "Mumbai",
    title: "Works well before office commute",
  },
  {
    quote: "Loved the face wash. Gentle, fresh, and it doesn’t dry out my skin.",
    name: "Aditya M.",
    city: "Bengaluru",
    title: "Daily morning user",
  },
  {
    quote: "Simple routine, good fragrance, and easy to use daily before work.",
    name: "Neha K.",
    city: "Pune",
    title: "Beginner skincare shopper",
  },
];

export const whyChoose = [
  {
    title: "Organic daily skincare",
    description: "A cleaner everyday ritual built around organic ingredients and wearable textures.",
    icon: Droplets,
  },
  {
    title: "Made for Indian weather",
    description: "Positioned for warm days, commutes, and routines that cannot feel heavy.",
    icon: SunMedium,
  },
  {
    title: "Organic ingredient-led formulas",
    description: "Botanical-led storytelling that feels familiar, premium, and easy to trust.",
    icon: Leaf,
  },
  {
    title: "Ancient Ayurveda, modern glow",
    description: "The range can carry heritage-led products like Shata Dhauta Ghrita with a refined modern skincare expression.",
    icon: Flower2,
  },
  {
    title: "Simple routine",
    description: "A low-effort cleanse-and-protect flow that works for repeat use.",
    icon: Clock3,
  },
  {
    title: "Available on Amazon & Flipkart",
    description: "Trust is reinforced by sending shoppers to established marketplaces.",
    icon: Star,
  },
  {
    title: "Suitable for everyday use",
    description: "Built around consistent use instead of occasional treatment-style messaging.",
    icon: BadgeCheck,
  },
];

export const blogPosts = [
  {
    title: "SPF 30 vs SPF 50: Which sunscreen should you choose?",
    excerpt:
      "A practical guide to choosing the right lightweight sunscreen based on routine, comfort, and daily exposure.",
  },
  {
    title: "How to build a simple morning skincare routine",
    excerpt:
      "Learn how a cleanser and sunscreen can form a reliable skincare routine without feeling complicated.",
  },
  {
    title: "Best skincare routine for Indian weather",
    excerpt:
      "Why climate, commute, humidity, and daily habits matter when picking natural skincare essentials.",
  },
  {
    title: "What is Shata Dhauta Ghrita in skincare?",
    excerpt:
      "Explore the Ayurveda-rooted story of A2 cow ghee washed 100 times in a copper vessel and how it fits a modern glow routine.",
  },
];

export const faqs = [
  {
    question: "Is OrganoSilvia sunscreen suitable for daily use?",
    answer:
      "Yes. It is positioned as a lightweight sunscreen for Indian skin and is designed to fit into everyday morning routines.",
  },
  {
    question: "Can men use these products?",
    answer:
      "Yes. OrganoSilvia products are made for daily skincare routines for both men and women.",
  },
  {
    question: "Is the face wash suitable for oily skin?",
    answer:
      "The face wash is described as gentle daily care and can fit oily and combination routines that need a fresh, comfortable cleanse.",
  },
  {
    question: "Where can I buy OrganoSilvia products?",
    answer:
      "You can currently purchase through Amazon and Flipkart using the marketplace buttons across the page.",
  },
  {
    question: "Can I use face wash and sunscreen together?",
    answer:
      "Yes. The site recommends them as a simple two-step morning skincare routine: cleanse first, then protect.",
  },
  {
    question: "Is this suitable for sensitive skin?",
    answer:
      "Skin responses vary. The formulas are presented as gentle daily care, but patch testing and checking the final product label remains the safest approach.",
  },
];

import Link from "next/link";
import { ArrowRight, ExternalLink, ShoppingBag } from "lucide-react";
import { marketplaceLinks } from "@/lib/site";

type MarketplaceLinkOverrides = Partial<typeof marketplaceLinks>;

type MarketplaceButtonsProps = {
  align?: "start" | "center";
  compact?: boolean;
  showExplore?: boolean;
  emphasize?: "amazon" | "flipkart";
  links?: MarketplaceLinkOverrides;
};

export function MarketplaceButtons({
  align = "start",
  compact = false,
  showExplore = false,
  emphasize,
  links,
}: MarketplaceButtonsProps) {
  const resolvedLinks = {
    ...marketplaceLinks,
    ...links,
  };
  const alignment = align === "center" ? "justify-center" : "justify-start";
  const sizeClass = compact
    ? "min-h-11 px-4 py-2.5 text-sm"
    : "min-h-12 px-5 py-3.5 text-sm sm:text-base";
  const amazonClass =
    emphasize === "amazon"
      ? "cta-primary ring-4 ring-[#dce7d8]"
      : "cta-primary";
  const flipkartClass =
    emphasize === "flipkart"
      ? "cta-secondary ring-4 ring-[#f5e9cb]"
      : "cta-secondary";

  return (
    <div className={`flex flex-wrap gap-3 ${alignment}`}>
      {resolvedLinks.amazon ? (
        <Link
          href={resolvedLinks.amazon}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 hover:-translate-y-0.5 ${amazonClass} ${sizeClass}`}
        >
          <ShoppingBag className="h-4 w-4" />
          Buy on Amazon
          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
        </Link>
      ) : null}
      {resolvedLinks.flipkart ? (
        <Link
          href={resolvedLinks.flipkart}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 hover:-translate-y-0.5 ${flipkartClass} ${sizeClass}`}
        >
          <ShoppingBag className="h-4 w-4" />
          Buy on Flipkart
          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
        </Link>
      ) : null}
      {showExplore ? (
        <a
          href="#products"
          className={`cta-tertiary inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-white ${sizeClass}`}
        >
          Explore Products
          <ArrowRight className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}

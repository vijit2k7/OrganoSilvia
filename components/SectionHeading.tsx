type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="heading-display mt-5 text-4xl text-[#203223] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-[#57675d] sm:text-lg">{description}</p>
    </div>
  );
}

"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type ProductImageDeckProps = {
  alt: string;
  images: string[];
  aspect?: "card" | "hero";
  hoverPreviewIndex?: number;
  priority?: boolean;
  showMeta?: boolean;
};

export function ProductImageDeck({
  alt,
  images,
  aspect = "card",
  hoverPreviewIndex,
  priority = false,
  showMeta = true,
}: ProductImageDeckProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (
      images.length <= 1 ||
      reduceMotion ||
      !hovered ||
      typeof hoverPreviewIndex === "number"
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, aspect === "hero" ? 2800 : 2400);

    return () => window.clearInterval(timer);
  }, [aspect, hovered, hoverPreviewIndex, images.length, reduceMotion]);
  const displayIndex =
    typeof hoverPreviewIndex === "number" && hovered && images[hoverPreviewIndex]
      ? hoverPreviewIndex
      : index;
  const activeImage = images[displayIndex];
  const frameClass =
    aspect === "hero"
      ? "relative flex h-[360px] items-center justify-center sm:h-[400px]"
      : "relative flex h-[320px] items-center justify-center sm:h-[360px]";
  const imageClass =
    aspect === "hero"
      ? "mx-auto max-h-[320px] w-auto max-w-full rounded-[1.2rem] object-contain sm:max-h-[360px]"
      : "mx-auto max-h-[280px] w-auto max-w-full rounded-[1.2rem] object-contain sm:max-h-[320px]";

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${frameClass} relative overflow-hidden rounded-[1.2rem]`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeImage}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985, y: 8 }}
            animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, scale: 1.015, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full w-full items-center justify-center will-change-transform"
          >
            <Image
              src={activeImage}
              alt={alt}
              width={520}
              height={620}
              className={imageClass}
              priority={priority}
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && showMeta ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#fff8ee] via-[#fff8ee]/88 to-transparent px-3 pb-3 pt-10">
            <div className="pointer-events-auto flex gap-2">
              {images.map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Show image ${imageIndex + 1} for ${alt}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    imageIndex === displayIndex ? "w-8 bg-[#274934]" : "w-2.5 bg-[#d2c5ab]"
                  }`}
                  onClick={() => setIndex(imageIndex)}
                />
              ))}
            </div>
            <div className="pointer-events-none text-right">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a867c]">
                {String(displayIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#9aa59c]">
                Hover to preview
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

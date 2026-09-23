import { useCallback, useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({
  children,
  itemClassName = "w-[82%] sm:w-[48%] lg:w-[32%]",
  label,
}: {
  children: ReactNode[];
  itemClassName?: string;
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {children.map((child, i) => (
          <div key={i} className={`shrink-0 snap-center ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Anterior"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-soft backdrop-blur transition hover:bg-background md:-left-4"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-soft backdrop-blur transition hover:bg-background md:-right-4"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}

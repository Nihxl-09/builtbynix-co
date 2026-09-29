import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.setProperty(
            "--reveal-delay",
            `${delay}s`
          );

          element.classList.add("is-visible");

          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`nix-reveal ${className}`}
    >
      {children}
    </div>
  );
}

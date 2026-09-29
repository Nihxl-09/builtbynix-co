import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const isTouchDevice =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouchDevice) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const handleEnter = (event) => {
      const target = event.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      if (target) {
        ring.classList.add("cursor-hover");
        dot.classList.add("cursor-dot-hover");
      }
    };

    const handleLeave = (event) => {
      const target = event.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      if (target) {
        ring.classList.remove("cursor-hover");
        dot.classList.remove("cursor-dot-hover");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="nix-cursor-dot" ref={dotRef} />
      <div className="nix-cursor-ring" ref={ringRef}>
        <span />
      </div>
    </>
  );
}
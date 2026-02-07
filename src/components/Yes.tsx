import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect } from "react";

type Props = {
  onClick?: () => void;
};

export default function Yes({ onClick }: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 22 });
  const springY = useSpring(y, { stiffness: 300, damping: 22 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const MAGNET_RADIUS = 300; // starts early
      const STRENGTH = 1.25; // 👈 toned down (important)
      const MAX_OFFSET = 60; // 👈 prevents runaway movement

      if (distance < MAGNET_RADIUS) {
        const offsetX = Math.max(
          -MAX_OFFSET,
          Math.min(MAX_OFFSET, dx * STRENGTH),
        );
        const offsetY = Math.max(
          -MAX_OFFSET,
          Math.min(MAX_OFFSET, dy * STRENGTH),
        );

        x.set(offsetX);
        y.set(offsetY);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        bg-rose-200 text-rose-700
        px-14 py-6 text-2xl
        rounded-full shadow
        hover:bg-rose-300 transition
        romantic-text
      "
    >
      Yes 💌
    </motion.button>
  );
}

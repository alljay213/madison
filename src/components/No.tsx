import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect } from "react";

type Props = {
  onClick?: () => void;
};
export default function No({ onClick }: Props) {
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

      const AVOID_RADIUS = 300; // 👈 starts before hover
      const STRENGTH = 0.7;

      if (distance < AVOID_RADIUS) {
        x.set(-dx * STRENGTH);
        y.set(-dy * STRENGTH);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className="bg-white text-black px-3 py-1 text-xs rounded-full shadow hover:bg-rose-300 transition"
    >
      No
    </motion.button>
  );
}

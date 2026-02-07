import { motion } from "motion/react";

export default function Heart() {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.2, 0.95, 1] }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 15 }}
      className="h-[1em] w-[1em]"
      style={{ overflow: "visible" }}
    >
      <motion.path
        d="M12 21s-6.716-4.438-9.33-7.05C.736 12.016.5 9.305 2.343 7.464 4.186 5.62 6.897 5.856 8.83 7.79L12 10.96l3.17-3.17c1.933-1.934 4.644-2.17 6.487-.326 1.843 1.841 1.607 4.552-.327 6.486C18.716 16.562 12 21 12 21z"
        fill="#ec4899"
        animate={{
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "50% 50%" }}
      />
    </motion.svg>
  );
}

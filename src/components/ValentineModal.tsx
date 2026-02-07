import { motion, AnimatePresence } from "motion/react";

type Props = {
  isOpen: boolean;
  variant?: "yes" | "no";
  onNext: () => void;
};

export default function ValentineModal({
  isOpen,
  onNext,
  variant = "yes",
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onNext}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          >
            <div
              className="
                bg-white rounded-3xl px-10 py-8
                text-center shadow-2xl
                max-w-sm w-full
              "
              onClick={(e) => e.stopPropagation()}
            >
              {variant === "yes" ? (
                <>
                  <h2 className="text-3xl text-rose-500 font-semibold mb-4">
                    💖 Yay! 💖
                  </h2>

                  <p className="text-gray-600 mb-6">
                    You just made my day.
                    <br />
                    Happy Valentine’s 💕
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl text-rose-500 font-semibold mb-4">
                    😏 Nice try
                  </h2>

                  <p className="text-gray-600 mb-6">
                    Jokes on you…
                    <br />
                    it’s still a yes 💖
                  </p>
                </>
              )}

              <button
                onClick={onNext}
                className="bg-rose-200 text-rose-700 px-6 py-2 rounded-full hover:bg-rose-300 transition"
              >
                Okay 💕
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

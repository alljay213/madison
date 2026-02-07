import { motion, AnimatePresence } from "motion/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function GiftCardModal({ isOpen, onClose }: Props) {
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
            onClick={onClose}
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
              className="bg-white rounded-3xl px-10 py-8 text-center shadow-2xl max-w-xl w-full
"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl text-rose-500 font-semibold mb-4">
                ☕ A little something for you
              </h2>

              <div className="bg-white p-4 rounded-xl">
                <img
                  src={`${import.meta.env.BASE_URL}starbucks.jpg`}
                  alt="Starbucks gift card barcode"
                  style={{ width: "384px" }}
                  className="mx-auto"
                />
              </div>

              <p className="text-gray-500 text-sm mb-6">
                Scan at Starbucks or add to your app 💚
              </p>

              <button
                onClick={onClose}
                className="bg-rose-200 text-rose-700 px-6 py-2 rounded-full hover:bg-rose-300 transition"
              >
                Thank you 💕
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import Heart from "./components/Heart";
import AvoidNo from "./components/No";
import MagneticYes from "./components/Yes";
import ValentineModal from "./components/ValentineModal";
import GiftCardModal from "./components/GiftCardModal";

import "./App.css";

function App() {
  // modal states
  const [valentineOpen, setValentineOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);

  // which button was clicked
  const [variant, setVariant] = useState<"yes" | "no">("yes");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.0625,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const text = "Madison, will you be my valentine?";

  return (
    <>
      <div>
        {/* Animated text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex items-center text-6xl romantic-text text-pink-500 leading-none"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {/* Heart appears after text */}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: text.length * 0.0625 }}
            className="ml-4 inline-flex items-center"
          >
            <Heart />
          </motion.span>
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-6 p-6 justify-center items-center">
          <MagneticYes
            onClick={() => {
              setVariant("yes");
              setValentineOpen(true);
            }}
          />

          <AvoidNo
            onClick={() => {
              setVariant("no");
              setValentineOpen(true);
            }}
          />
        </div>

        {/* Valentine modal */}
        <ValentineModal
          isOpen={valentineOpen}
          variant={variant}
          onNext={() => {
            setValentineOpen(false);
            setGiftOpen(true);
          }}
        />

        {/* Gift card modal */}
        <GiftCardModal isOpen={giftOpen} onClose={() => setGiftOpen(false)} />
      </div>
    </>
  );
}

export default App;

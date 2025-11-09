// components/FloatingTooltip.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

export const FloatingTooltip = ({ text, position }) => {
  if (!text) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={text}
        initial={{ opacity: 0, scale: 0.9, y: 5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0, y: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed px-4 py-2 bg-pink text-white rounded-full text-sm font-medium pointer-events-none shadow-lg z-50"
        style={{
          top: position.y + 20,
          left: position.x + 20,
          transform: "translate(-50%, -50%)",
        }}
      >
        {text}
      </motion.div>
    </AnimatePresence>
  );
};

// components/FloatingTooltip.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

export const FloatingTooltip = ({ text, position }) => {
  if (!text) return null;

  const offsetX = position.x > window.innerWidth - 150 ? -20 : 20;
  const offsetY = position.y > window.innerHeight - 100 ? -20 : 20;

  return (
    <AnimatePresence>
      <motion.div
        key={text}
        initial={{ opacity: 0, scale: 0.9, y: 5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0, y: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed px-4 py-2 bg-pink text-white rounded-full text-sm font-medium pointer-events-none shadow-lg z-50 hidden lg:flex"
        style={{
          top: position.y + offsetY,
          left: position.x + offsetX,
          transform: "translate(-50%, -50%)",
        }}
      >
        {text}
      </motion.div>
    </AnimatePresence>
  );
};

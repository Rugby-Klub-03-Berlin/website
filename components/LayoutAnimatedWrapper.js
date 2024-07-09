"use client";
import { AnimatePresence, motion } from "framer-motion";

export const LayoutAnimateWrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={{
          visible: {
            clipPath: "inset(0 0 0 0)",
            transition: {
              duration: 2.5,
              delay: 1,
            },
          },
          hidden: {
            clipPath: "inset(0 0 100% 0)",
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

"use client";
import { space } from "@/public/fonts/fonts";
import { motion } from "framer-motion";

export const TitleComponent = ({ text, delay, className }) => {
  const titleVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.3,
        delay: delay,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.3,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={titleVariants}
      className={space.className}
    >
      <p className={className}>{text}</p>
    </motion.div>
  );
};

"use client";

import { motion } from "motion/react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhyCard = ({ number, children }) => {
  return (
    <motion.div variants={cardVariants} className="bg-gray-100 rounded-xl h-full flex">
      <div className="grid grid-cols-3 gap-2 w-full">
        <div className="col-span-3 sm:col-span-2 py-4 ps-4 flex items-center">
          <p className="text-2xl sm:text-3xl text-center sm:text-start font-caveat font-medium">
            {children}
          </p>
        </div>

        <div className="hidden sm:flex col-span-1 bg-gradient-to-br from-transparent via-orange-600 to-orange-700 items-center justify-end rounded-xl">
          <span className="text-white/20 text-6xl font-bold">{number}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyCard;

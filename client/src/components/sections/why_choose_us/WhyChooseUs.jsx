"use client";

import { motion } from "motion/react";
import WhyCard from "./WhyCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      text: (
        <>
          Handmade with lots of <span className="text-orange">care</span>
        </>
      ),
    },
    {
      number: "02",
      text: (
        <>
          Customizable <span className="text-orange">Design</span>
        </>
      ),
    },
    {
      number: "03",
      text: (
        <>
          Durable natural <span className="text-orange">Yarn</span>
        </>
      ),
    },
    {
      number: "04",
      text: (
        <>
          Kenyan-based <span className="text-orange">Craftsmanship</span>
        </>
      ),
    },
    {
      number: "05",
      text: (
        <>
          <span className="text-orange">Fast</span> Delivery times
        </>
      ),
    },
    {
      number: "06",
      text: (
        <>
          <span className="text-orange">Secure</span> Payment Options
        </>
      ),
    },
  ];

  return (
    <div className="bg-cobalt-400 relative px-6 pb-28 opacity-80 overflow-hidden -mx-6 sm:-mx-40 sm:px-40 pt-8 mt-20">
      <p className="font-bold text-3xl sm:text-6xl py-4 underline text-center text-gray-100">
        Why choose us
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 items-stretch mb-10 mt-15"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {reasons.map((item) => (
          <WhyCard key={item.number} number={item.number}>
            {item.text}
          </WhyCard>
        ))}
      </motion.div>

      {/**Section divider */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Back Wave */}
        <svg
          className="wave-back w-[120%] h-32 absolute bottom-0 left-1/2 -translate-x-1/2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            fillOpacity="0.4"
            d="M0,192C120,224,240,256,360,240C480,224,600,160,720,154.7C840,149,960,203,1080,224C1200,245,1320,235,1440,192V320H0Z"
          />
        </svg>

        {/* Front Wave */}
        <svg
          className="wave-front absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-32 fill-current text-orange-100"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,224C90,256,180,288,270,272C360,256,450,192,540,176C630,160,720,192,810,218.7C900,245,990,267,1080,245.3C1170,224,1260,160,1350,144C1440,128,1530,160,1620,181.3V320H0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default WhyChooseUs;

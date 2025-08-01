import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CardStatisric = ({ value, label }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ count: value });
    }
  }, [inView, controls, value]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-sm border p-4 sm:p-6 w-full text-center hover:shadow-md transition"
    >
      <motion.div
        initial={{ count: 0 }}
        animate={controls}
        transition={{ duration: 2 }}
      >
        {({ count }) => (
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1F51]">
            {Math.round(count)}+
          </h2>
        )}
      </motion.div>
      <p className="text-[#0E1F51] mt-2 text-base sm:text-lg font-medium">{label}</p>
    </div>
  );
};

export default CardStatisric;

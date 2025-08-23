import React from "react";
import { motion } from "framer-motion";

const Advantage2 = () => {
  const items = [
    { number: 1, title: "Customer Care", description: "Support your customers" },
    { number: 2, title: "Fast Delivery", description: "Quick & safe delivery" },
    { number: 3, title: "Secure System", description: "Trusted security system" },
    { number: 4, title: "24/7 Service", description: "Always available" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Advantages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.number} // 🔥 index emas, unique key
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 * index }}
            >
              {/* Ikonka */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4"
                aria-hidden="true" // 🔥 faqat dekorativ ikon bo‘lsa
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </div>

              {/* Kontent */}
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage2;

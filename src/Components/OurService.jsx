import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FaLaptopCode, FaBullhorn, FaRocket, FaPaintBrush, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import rasm1 from "../assets/photo1.webp";
import rasm2 from "../assets/photo2.webp";
import rasm3 from "../assets/photo3.webp";
import rasm4 from "../assets/photo4.webp";
import rasm5 from "../assets/photo5.webp";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const OurService = () => {
  const { t } = useTranslation();

  const serviceItems = [
    { key: "serviceone", icon: <FaLaptopCode className="text-white text-3xl" />, path: "/services", bgImage: rasm1 },
    { key: "servicetwo", icon: <FaBullhorn className="text-white text-3xl" />, path: "/services/one", bgImage: rasm2 },
    { key: "servicethree", icon: <FaRocket className="text-white text-3xl" />, path: "/services/two", bgImage: rasm3 },
    { key: "servicefour", icon: <FaPaintBrush className="text-white text-3xl" />, path: "/services/three", bgImage: rasm4 },
    { key: "servicefive", icon: <FaCogs className="text-white text-3xl" />, path: "/services/four", bgImage: rasm5 },
  ];

  return (
    <div className="py-20 bg-white text-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-base uppercase text-[#4CAF50] font-semibold tracking-wider mb-2"
        >
          {t("servises")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-[#0E1F51] mt-4"
        >
          {t("our_services")}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {serviceItems.map(({ key, icon, path, bgImage }, index) => {
          const [title, ...description] = t(key).split(":");
          const colSpan = index >= 3 ? "lg:col-span-3" : "lg:col-span-2";

          return (
            <motion.div
              key={key}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-xl border border-gray-200 shadow-lg flex flex-col items-center text-center transition-transform duration-300 group overflow-hidden min-h-[350px] ${colSpan}`}
            >
              {/* ✅ Background image har doim ko‘rinadi */}
              <img
                src={bgImage}
                alt={title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover -z-10 will-change-transform"
              />
              {/* ✅ Overlay doimiy, faqat hoverda biroz qorayadi */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="mb-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="inline-block p-4 rounded-xl bg-[#ffffff22] backdrop-blur-sm"
                >
                  {icon}
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white text-lg mb-4 max-w-[320px] sm:max-w-[300px] relative z-10">
                {description.join(":")}
              </p>

              {/* Link */}
              <NavLink
                to={path}
                className="group text-white font-semibold flex items-center gap-2 hover:text-[#4CAF50] transition-colors duration-300 text-base mt-6 relative z-10"
              >
                {t("more")}
                <span className="text-lg transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;

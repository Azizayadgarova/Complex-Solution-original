import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaSearch, FaClipboardList, FaCogs, FaVial } from "react-icons/fa";

const steps = [
  { key: "research", number: 1, Icon: FaSearch },
  { key: "planning", number: 2, Icon: FaClipboardList },
  { key: "execution", number: 3, Icon: FaCogs },
  { key: "testing", number: 4, Icon: FaVial },
];

const VerticalStep = ({ step, title, description, isLastStep }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  // Media query orqali mobil holat
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Icon size-ni responsive qilib memo qilib oldik
  const iconSize = useMemo(() => {
    if (isMobile) return 18;
    if (window.innerWidth >= 1280) return 28;
    if (window.innerWidth >= 1024) return 24;
    return 20;
  }, [isMobile]);

  // Framer variants – keraksiz animate={} ni kamaytiradi
  const fadeVariants = {
    hidden: (x) => ({ opacity: 0, x }),
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const Icon = step.Icon;

  // ✅ Mobile Layout
  if (isMobile) {
    return (
      <div ref={ref} className="relative mb-12 last:mb-0">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            className="rounded-full shadow-lg w-12 h-12 flex items-center justify-center"
            animate={{
              background: inView
                ? "linear-gradient(45deg, #4CAF50, #0066CC)"
                : "#d1d5db",
            }}
            transition={{ duration: 0.8 }}
          >
            <Icon size={18} className="text-white" />
          </motion.div>

          {/* Line */}
          {!isLastStep && (
            <motion.div
              className="w-0.5 mt-2 bg-gradient-to-b from-[#4CAF50] to-[#0066CC]"
              initial={{ height: 0 }}
              animate={inView ? { height: "60px" } : { height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}

          {/* Content */}
          <motion.div
            custom={20}
            variants={fadeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: step.number * 0.1 }}
            className="flex-1 pt-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{
                  background: inView
                    ? "linear-gradient(to right, #4CAF50, #0066CC)"
                    : "none",
                  WebkitBackgroundClip: inView ? "text" : "unset",
                  WebkitTextFillColor: inView ? "transparent" : "inherit",
                  color: inView ? "transparent" : "#d1d5db",
                }}
              >
                0{step.number}
              </h3>
              <h4
                className={`text-lg sm:text-xl font-semibold ${
                  inView ? "text-[#333333]" : "text-gray-600"
                }`}
              >
                {title}
              </h4>
            </div>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // ✅ Desktop Layout
  return (
    <div ref={ref} className="relative pb-24 lg:pb-32 last:pb-0">
      {/* Icon */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 z-10 rounded-full shadow-lg flex items-center justify-center"
        style={{ width: iconSize * 2, height: iconSize * 2 }}
        animate={{
          background: inView
            ? "linear-gradient(45deg, #4CAF50, #0066CC)"
            : "#d1d5db",
        }}
        transition={{ duration: 1.2 }}
      >
        <Icon size={iconSize} className="text-white" />
      </motion.div>

      {/* Line */}
      {!isLastStep && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#4CAF50] to-[#0066CC]"
          style={{ top: "48px", width: "2px" }}
          initial={{ height: 0 }}
          animate={inView ? { height: "calc(100% - 48px)" } : { height: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6 lg:gap-x-12 xl:gap-x-16 items-center pt-6">
        <motion.div
          custom={-30}
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: step.number * 0.1 }}
          className="text-right pr-4 lg:pr-8"
        >
          <div className="flex items-center justify-end gap-4">
            <h3
              className="text-3xl lg:text-4xl xl:text-6xl font-bold"
              style={{
                background: inView
                  ? "linear-gradient(to right, #4CAF50, #0066CC)"
                  : "none",
                WebkitBackgroundClip: inView ? "text" : "unset",
                WebkitTextFillColor: inView ? "transparent" : "inherit",
                color: inView ? "transparent" : "#d1d5db",
              }}
            >
              0{step.number}
            </h3>
            <h4
              className={`text-xl lg:text-2xl xl:text-3xl font-semibold ${
                inView ? "text-[#333333]" : "text-gray-600"
              }`}
            >
              {title}
            </h4>
          </div>
        </motion.div>

        <div className="w-12 lg:w-16 xl:w-20"></div>

        <motion.div
          custom={30}
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: step.number * 0.1 }}
          className="text-left pl-4 lg:pl-8"
        >
          <p className="text-base lg:text-lg xl:text-xl text-[#555555] leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const OurProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <p className="text-sm sm:text-base uppercase text-[#3b74a6] font-semibold tracking-wider mb-2 md:mb-4">
            {t("ourprocess.tagline")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#333333] leading-tight">
            {t("ourprocess.title")}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <VerticalStep
              key={step.key}
              step={step}
              title={t(`ourprocess.${step.key}.title`)}
              description={t(`ourprocess.${step.key}.description`)}
              isLastStep={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

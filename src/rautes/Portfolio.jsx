import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import img from "../assets/portfoliopage.jpg";
import {
  FaList,
  FaNetworkWired,
  FaHospital,
  FaSeedling,
  FaServer,
  FaBook,
  FaBriefcase,
} from "react-icons/fa";
import Projects from "../Components/Projects";

const Portfolio = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  const tabs = [
    { labelKey: "life", icon: <FaNetworkWired /> },
    { labelKey: "moments", icon: <FaHospital /> },
    { labelKey: "nature", icon: <FaSeedling /> },
    { labelKey: "travel", icon: <FaServer /> },
    { labelKey: "education", icon: <FaBook /> },
    { labelKey: "sector", icon: <FaBriefcase /> },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const step = 0.8; // sekin harakat
    const interval = 30; // ms

    const scrollInterval = setInterval(() => {
      if (container) {
        scrollAmount += step;
        container.scrollLeft = scrollAmount;

        // Agar 1-kopiyaning oxiriga yetgan bo‘lsa, qaytadan boshlash
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-white mb-[100px]">
      {/* Header with Background Image */}
      <div
        className="relative py-[100px] sm:py-[140px] md:py-[180px] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* Text content */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
            {t("portfolio")}
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-bold text-white">
            {t("home")} / {t("portfolio")}
          </p>
        </div>
      </div>

      {/* Experience Title */}
      <div className="flex flex-col items-center mb-12 mt-12 sm:mt-24 px-4 text-center">
        <h2 className="text-[#2a5e91] text-2xl sm:text-3xl md:text-4xl font-medium">
          {t("experience")}
        </h2>
      </div>

      {/* Tabs (infinite autoplay scroll) */}
      <div className="w-full overflow-x-hidden">
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-3 sm:gap-4 px-[4%] py-5 bg-gray-100 overflow-x-hidden scroll-smooth"
        >
          {[...tabs, ...tabs].map(({ labelKey, icon }, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 bg-white text-[#1f4b73] hover:bg-gray-200 whitespace-nowrap"
            >
              <span className="text-lg sm:text-xl">{icon}</span>
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>
      <Projects/>
    </div>
  );
};

export default Portfolio;

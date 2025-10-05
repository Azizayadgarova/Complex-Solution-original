import React from "react";
import { useTranslation } from "react-i18next";

/**
 * props:
 * - titleKey: i18n key for section title (ixtiyoriy)
 * - items: [{ title: 'i18n_key', desc: 'i18n_key', Icon: Component }]
 */
const FeatureSection = ({ titleKey, items = [] }) => {
  const { t } = useTranslation();

  return (
    <section className="py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-[4%]">
      {titleKey && (
        <h2 className="text-center text-[#2A5E91] text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10">
          {t(titleKey)}
        </h2>
      )}

      <div className="space-y-6 sm:space-y-8">
        {items.map(({ title, desc, Icon }, idx) => (
          <article
            key={idx}
            className="relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8"
          >
            {/* Katta kulrang tartib raqami */}
            <div className="select-none absolute top-5 right-6 text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gray-200">
              {String(idx + 1).padStart(2, "0")}
            </div>

            <div className="flex items-start gap-5 sm:gap-6">
              {/* Ko‘k dumaloq ikonka */}
              <div className="shrink-0">
                <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-[#2A5E91] flex items-center justify-center ring-8 ring-white/80 shadow-lg">
                  {/* Icon komponenti className qabul qilishi kerak */}
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Matnlar */}
              <div className="flex-1">
                <h3 className="text-[#2A5E91] text-2xl sm:text-3xl font-semibold">
                  {t(title)}
                </h3>
                <span className="block h-[4px] w-16 bg-[#43A047] rounded mt-3 mb-4" />
                <p className="text-[#444] text-base sm:text-lg leading-relaxed">
                  {t(desc)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

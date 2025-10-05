// src/Components/Projects.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = ({ limit }) => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });

  useEffect(() => {
    const ctrl = new AbortController();
    setState({ loading: true, error: null });

    fetch(`https://complex-solution-2.onrender.com/api/projects?lang=${i18n.language}`, { signal: ctrl.signal, cache: "no-cache" })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setState({ loading: false, error: null });
      })
      .catch((err) => {
        if (err.name !== "AbortError") setState({ loading: false, error: err.message });
      });

    return () => ctrl.abort();
  }, [i18n.language]);

  if (state.loading) {
    return <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">{t("projects_loading")}...</p>;
  }
  if (state.error) {
    return <p className="text-center mt-10 text-red-600 text-lg font-medium">{t("projects_error")}: {state.error}</p>;
  }

  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="min-h-screen font-sans bg-white sm:px-6 py-8 sm:py-12 md:py-16">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1f4b73] uppercase mb-12">
        {t("projects_title")}
      </h2>

      <div className="flex flex-col gap-12 sm:gap-16">
        {displayed.length ? displayed.map((project, index) => (
          <div key={project._id} className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 sm:p-8 transition-shadow hover:shadow-xl duration-300">
            <div className={`flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-10 lg:gap-16 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              {/* Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1">
                <img
                  src={project.img}
                  alt={project.name}
                  width="560" height="360"
                  loading="lazy" decoding="async"
                  className="w-full max-w-md md:max-w-full rounded-xl object-contain"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2 md:pl-6 lg:pl-10">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#1f4b73] mb-4 sm:mb-6 leading-snug">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {project.about || t("projects_no_description")}
                </p>

                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  <span className="font-bold text-[#1f4b73]">{t("advantag")}</span> {project.advantages}
                </p>

                <a
                  className="mt-6 inline-block text-sm sm:text-base font-medium text-white w-[44%] bg-[#1f4b73] hover:bg-[#153655] transition-colors duration-300 px-6 sm:px-10 py-2 rounded-full shadow-md"
                  href={project.link || project.repoLink || "#"}
                  target="_blank" rel="noopener noreferrer"
                >
                  {t("expand")} →
                </a>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-center text-gray-600 text-lg sm:text-xl">{t("projects_no_projects_found")} 😞</p>
        )}
      </div>
    </div>
  );
};

export default Projects;

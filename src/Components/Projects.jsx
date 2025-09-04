
  // src/Components/Projects.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = ({ limit }) => {   // ✅ limit props qo‘shildi
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://complex-solution-2.onrender.com/api/projects?lang=${i18n.language}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [i18n.language]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">
        {t("projects_loading")}...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-600 text-lg font-medium">
        {t("projects_error")}: {error} 
      </p>
    );
  }

  // ✅ Agar limit bo‘lsa, shuncha cardni ko‘rsatamiz
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="min-h-screen font-sans bg-white sm:px-6 py-8 sm:py-12 md:py-16">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1f4b73] uppercase mb-12">
        {t("projects_title")}
      </h2>

      <div className="flex flex-col gap-12 sm:gap-16">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 transition-shadow hover:shadow-xl duration-300"
            >
              <div
                className={`flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-10 lg:gap-16 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Left Section — Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full max-w-md h-[490px] raunded-[15%] md:max-w-full rounded-xl h-auto object-contain"
                  />
                </div>

                {/* Right Section — Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-between order-1 md:order-2 md:pl-6 lg:pl-10">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#1f4b73] mb-4 sm:mb-6 leading-snug">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {project.about || t("projects_no_description")}
                  </p>

                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    <span className="font-bold text-[#1f4b73]">
                      {t("advantag")}
                    </span>{" "}
                    {project.advantages}
                  </p>

                  {/* Button */}
                  <a
                    className="mt-6 inline-block text-sm sm:text-base font-medium text-white w-[44%] bg-[#1f4b73] hover:bg-[#153655] transition-colors duration-300 px-6 sm:px-10 py-2 rounded-full shadow-md"
                    href={project.link || project.repoLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("expand")} →
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg sm:text-xl">
            {t("projects_no_projects_found")} 😞
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;

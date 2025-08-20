import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://complex-solution-2.onrender.com/api/projects?lang=${i18n.language}`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [i18n.language]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">
        {t('projects_loading')}...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-600 text-lg font-medium">
        {t('projects_error')}: {error} 😟
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2B5B] uppercase tracking-wide">
          {t('projects_title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <div
            key={project._id}
            className="relative bg-[#2a5e91] rounded-[5px] shadow-xl overflow-hidden w-full max-w-full sm:max-w-md lg:max-w-lg"
          >
            {project.img && (
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-[92%] mx-auto mt-[20px] rounded-[5px] h-60 sm:h-72 object-cover"
                />
                <div className="absolute bottom-0 left-0 flex items-stretch">
                  <div className="w-2 sm:w-3 bg-[#1A2B5B]"></div>
                  <div className="relative bg-[#5A86B0] text-white py-2 px-4 sm:px-6 shadow-md clip-path-arrow-right">
                    <h3 className="text-lg sm:text-xl font-bold">{project.name}</h3>
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 sm:p-6 bg-white">
              <p className="text-base sm:text-lg mb-4 font-bold">{project.advantages}</p>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {project.about || t('projects_no_description')}
              </p>
              <a
                href={project.link || project.repoLink || '#'}
                target={project.link || project.repoLink ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#2a5e91] text-white text-lg sm:text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)',
                }}
              >
                <span className="transform -rotate-45 block">&#10140;</span>
              </a>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <p className="text-center w-full text-gray-600 text-lg sm:text-xl col-span-full">
            {t('projects_no_projects_found')} 😞
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;

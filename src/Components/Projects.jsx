import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// No need for FaExternalLinkAlt, FaInfoCircle, FaCodeBranch as per the current image
// import { FaExternalLinkAlt, FaInfoCircle, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://complex-solution-2.onrender.com/api/projects')
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
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">{t('projects_loading')}...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-600 text-lg font-medium">{t('projects_error')}: {error} 😟</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      {/* Title section - matching the new image with "Service we provide" back and new colors */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A2B5B] uppercase tracking-wide">{t('projects_title')}</h2> {/* New color */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  justify-items-center">
        {projects.map((project) => (
          <div
            key={project._id}
            className="relative  bg-[#2a5e91] rounded-[5px] shadow-xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg"
          >
            {project.img && (
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.name}
                  className=" w-[92%] m-[20px] rounded-[5px] h-72 object-cover"
                />
                {/* Overlay for service name - styled to match image_184852.png with new colors */}
                <div className="absolute bottom-0 left-0 flex items-stretch">
                  {/* Left vertical bar - New darker blue/purple color */}
                  <div className="w-3 bg-[#1A2B5B]"></div>

                  {/* Main label with arrow shape - New light blue/cyan color */}
                  <div className="relative bg-[#5A86B0]  text-white py-2 px-6 shadow-md clip-path-arrow-right">
                    <h3 className="text-xl font-bold">{project.name}</h3>

                  </div>
                </div>
              </div>
            )}

            <div className="p-6 bg-white ">
              <p className='text-[20px] mb-[20px] text-bold '>{project.advantages}</p>
              <p className="text-gray-600 text-[16px] mb-6 leading-relaxed">
                {project.about || t('projects_no_description')}
              </p>
                <a
                href={project.link || project.repoLink || '#'}
                target={project.link || project.repoLink ? "_blank" : "_self"}
                rel="noopener noreferrer"
                title={project.link ? t('projects_view_project') : t('projects_view_code')}
                // --- START: MODIFIED STYLES TO MATCH IMAGE ---
                className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full
                           bg-[#90EE90] text-white text-xl transition-all duration-300 transform
                           hover:scale-111 hover:shadow-lg" // Added hover effects
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)', // Arrow shape from image
                }}
                // --- END: MODIFIED STYLES TO MATCH IMAGE ---
              >
                {/* The icon itself, matching the arrow in the image */}
                <span className="transform -rotate-45 block"> {/* Rotate span to make arrow point diagonally */}
                  &#10140; {/* Unicode right arrow character */}
                </span>
              </a>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-center w-full text-gray-600 text-xl md:col-span-2">{t('projects_no_projects_found')} 😞</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
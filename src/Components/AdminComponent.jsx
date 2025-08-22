import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imageCompression from 'browser-image-compression';

const API_URL = 'https://complex-solution-2.onrender.com/api/projects';

const AdminComponent = () => {
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: { uz: '', ru: '', en: '' },
    about: { uz: '', ru: '', en: '' },
    advantages: { uz: '', ru: '', en: '' },
    newFeature: { uz: '', ru: '', en: '' },
    link: '',
    img: '',
  });
  const [newProject, setNewProject] = useState({
    name: { uz: '', ru: '', en: '' },
    about: { uz: '', ru: '', en: '' },
    advantages: { uz: '', ru: '', en: '' },
    newFeature: { uz: '', ru: '', en: '' },
    link: '',
    img: '',
  });
  const [imageType, setImageType] = useState('upload');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const getAdminUser = () => {
    const user = localStorage.getItem('adminUser');
    try {
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Parsing error:", error);
      return null;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  useEffect(() => {
    fetchProjects();
    const user = getAdminUser();
    if (user?.fullname) setUsername(user.fullname);
  }, [i18n.language]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}?lang=${i18n.language}`);
      setProjects(response.data);
    } catch (error) {
      console.error('Xatolik (GET):', error);
    }
  };

  const addProject = async () => {
    try {
      await axios.post(`${API_URL}`, newProject);
      setNewProject({
        name: { uz: '', ru: '', en: '' },
        about: { uz: '', ru: '', en: '' },
        advantages: { uz: '', ru: '', en: '' },
        newFeature: { uz: '', ru: '', en: '' },
        link: '',
        img: ''
      });
      setImageType('upload');
      fetchProjects();
    } catch (error) {
      console.error('Yangi loyiha qo‘shishda xatolik:', error);
    }
  };

  const updateProject = async () => {
    try {
      await axios.put(`${API_URL}/${editingId}`, editForm);
      setEditingId(null);
      setEditForm({
        name: { uz: '', ru: '', en: '' },
        about: { uz: '', ru: '', en: '' },
        advantages: { uz: '', ru: '', en: '' },
        newFeature: { uz: '', ru: '', en: '' },
        link: '',
        img: ''
      });
      fetchProjects();
    } catch (error) {
      console.error('Yangilashda xatolik:', error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error('O‘chirishda xatolik:', error);
    }
  };

  const startEditing = (project) => {
    setEditingId(project._id);
    setEditForm({
      name: project.name,
      about: project.about,
      advantages: project.advantages,
      newFeature: project.newFeature,
      link: project.link,
      img: project.img
    });
  };

  // 📌 Rasmni siqib olish funksiyasi
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 0.3,       // 300 KB gacha siqadi
        maxWidthOrHeight: 1024, // Maksimal kenglik/balandlik
        useWebWorker: true
      };
      const compressedFile = await imageCompression(file, options);
      const base64 = await imageCompression.getDataUrlFromFile(compressedFile);

      setNewProject({ ...newProject, img: base64 });
    } catch (error) {
      console.error("Rasm siqishda xatolik:", error);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#0E1F51]">Admin Paneli</h2>
        <div className="flex gap-2 items-center">
          <span className="text-[#0E1F51] font-semibold">{username || 'Foydalanuvchi'}</span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Chiqish</button>
        </div>
      </div>

      {/* ➕ Yangi loyihani qo‘shish */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold text-[#0E1F51] mb-4">Yangi loyiha qo‘shish</h3>

        {/* Har bir til uchun inputlar */}
        {['uz', 'ru', 'en'].map((lang) => (
          <div key={lang} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input
              value={newProject.name[lang]}
              onChange={(e) => setNewProject({
                ...newProject,
                name: { ...newProject.name, [lang]: e.target.value }
              })}
              className="border p-2 rounded-md"
              placeholder={`Nomi (${lang})`}
            />
            <input
              value={newProject.about[lang]}
              onChange={(e) => setNewProject({
                ...newProject,
                about: { ...newProject.about, [lang]: e.target.value }
              })}
              className="border p-2 rounded-md"
              placeholder={`Haqida (${lang})`}
            />
            <input
              value={newProject.advantages[lang]}
              onChange={(e) => setNewProject({
                ...newProject,
                advantages: { ...newProject.advantages, [lang]: e.target.value }
              })}
              className="border p-2 rounded-md"
              placeholder={`Afzalliklari (${lang})`}
            />
            <input
              value={newProject.newFeature[lang]}
              onChange={(e) => setNewProject({
                ...newProject,
                newFeature: { ...newProject.newFeature, [lang]: e.target.value }
              })}
              className="border p-2 rounded-md"
              placeholder={`Yangi xususiyat (${lang})`}
            />
          </div>
        ))}

        <input
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
          className="border p-2 rounded-md w-full mb-3"
          placeholder="Sayt havolasi"
        />

        {/* Rasm tanlash */}
        <div className="flex gap-4 mb-3">
          <label>
            <input type="radio" value="upload" checked={imageType === 'upload'} onChange={() => setImageType('upload')} />
            Fayl yuklash
          </label>
          <label>
            <input type="radio" value="url" checked={imageType === 'url'} onChange={() => setImageType('url')} />
            URL kiritish
          </label>
        </div>
        {imageType === 'upload' ? (
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-3" />
        ) : (
          <input
            value={newProject.img}
            onChange={(e) => setNewProject({ ...newProject, img: e.target.value })}
            className="border p-2 rounded-md w-full mb-3"
            placeholder="Rasm URL"
          />
        )}

        <button onClick={addProject} className="bg-[#0E1F51] text-white px-4 py-2 rounded">Qo‘shish</button>
      </div>

      {/* 📦 Loyihalar ro‘yxati */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white shadow rounded-lg p-4">
            {editingId === project._id ? (
              <div>
                {['uz', 'ru', 'en'].map((lang) => (
                  <div key={lang} className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <input
                      value={editForm.name[lang]}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        name: { ...editForm.name, [lang]: e.target.value }
                      })}
                      className="border p-2 rounded"
                      placeholder={`Nomi (${lang})`}
                    />
                    <input
                      value={editForm.about[lang]}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        about: { ...editForm.about, [lang]: e.target.value }
                      })}
                      className="border p-2 rounded"
                      placeholder={`Haqida (${lang})`}
                    />
                  </div>
                ))}
                <button onClick={updateProject} className="bg-green-600 text-white px-4 py-1 rounded mr-2">Saqlash</button>
                <button onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-4 py-1 rounded">Bekor</button>
              </div>
            ) : (
              <>
                <img src={project.img} alt="img" className="w-full sm:w-40 h-40 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-bold text-[#0E1F51]">{project.name || 'Nomsiz loyiha'}</h3>
                <p className="text-sm text-gray-700 mb-1">{project.about || 'Maʼlumot yoʻq'}</p>
                <p className="text-sm text-[#0E1F51]"><strong>Afzalliklar:</strong> {project.advantages || '-'}</p>
                <p className="text-sm text-[#0E1F51]"><strong>Yangi xususiyat:</strong> {project.newFeature || '-'}</p>
                <a href={project.link} className="text-blue-600 underline text-sm">Saytga o‘tish</a>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => startEditing(project)} className="bg-blue-600 text-white px-3 py-1 rounded">Tahrirlash</button>
                  <button onClick={() => deleteProject(project._id)} className="bg-red-600 text-white px-3 py-1 rounded">O‘chirish</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminComponent;

// src/pages/ContactUs.jsx
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Loader2,
  Trash2,
  Phone,
  Mail,
} from "lucide-react";

const API_URL = "https://complex-solution-2.onrender.com/api/contacts";

// Small helper to join class names conditionally
const cx = (...arr) => arr.filter(Boolean).join(" ");

const ContactUs = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setContacts(res.data.data || []);
    } catch (error) {
      console.error("❌ Contactlarni olishda xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Rostdan ham ushbu kontaktni o‘chirmoqchimisiz?")) return;

    try {
      setDeleting(id);
      await axios.delete(`${API_URL}/${id}`);
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.error("❌ O‘chirishda xatolik:", error);
    } finally {
      setDeleting(null);
    }
  };

  // Sana + vaqt formatlash
  const formatDate = (d) => {
    if (!d) return "—";
    const date = new Date(d);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-GB", { month: "short" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    return `${day} ${month} ${year}, ${time}`;
  };

  const numbered = useMemo(() => {
    const base = 2630;
    return contacts.map((c, i) => ({ ...c, rid: `#${base + i + 1}` }));
  }, [contacts]);

  return (
    <div className="p-3 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a202c] mb-6 sm:mb-8 text-center">
        Bog‘lanishlar Ro‘yxati
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin w-10 h-10 text-[#2c5282]" />
        </div>
      ) : numbered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl font-medium text-gray-500">Hali foydalanuvchilar yozmagan 👀</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[0.7fr_1.4fr_2fr_1fr_0.7fr] items-center text-gray-600 text-sm font-semibold px-6 py-4 bg-white/70 backdrop-blur">
            <span>Id</span>
            <span>Name</span>
            <span>Aloqa</span>
            <span>Date</span>
            <span className="text-right">Action</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {numbered.map((c) => (
              <div
                key={c._id}
                className={cx(
                  "grid grid-cols-1 md:grid-cols-[0.7fr_1.4fr_2fr_1fr_0.7fr] items-center",
                  "px-4 sm:px-6 py-4 hover:shadow-[0_12px_25px_-10px_rgba(0,0,0,0.15)] transition-all duration-300"
                )}
              >
                {/* Id */}
                <div className="font-semibold text-gray-800">
                  <span className="inline-block px-3 py-1 rounded-full text-xs border border-gray-200 bg-gray-50 text-gray-700">
                    {c.rid}
                  </span>
                </div>

                {/* Name */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 shrink-0 rounded-full grid place-items-center font-semibold bg-gray-100 text-gray-700">
                    {c.name?.[0]?.toUpperCase() || "?"}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-gray-900">
                      {c.name || "Noma‘lum"}
                    </div>
                    <div className="text-xs text-gray-500">Contact</div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-sm truncate text-gray-700">
                    <Phone className="w-4 h-4 opacity-70" />
                    <a
                      href={c.phone ? `tel:${c.phone}` : undefined}
                      onClick={(e) => !c.phone && e.preventDefault()}
                      className="truncate text-[#0b5fff] hover:underline"
                    >
                      {c.phone || "—"}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs truncate mt-1 text-gray-500">
                    <Mail className="w-4 h-4 opacity-70" />
                    <a
                      href={c.email ? `mailto:${c.email}` : undefined}
                      onClick={(e) => !c.email && e.preventDefault()}
                      className="truncate hover:underline"
                    >
                      {c.email || "—"}
                    </a>
                  </div>
                </div>

                {/* Date + Time */}
                <div className="text-sm font-medium text-gray-700">
                  {formatDate(c.createdAt)}
                </div>

                {/* Delete only */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => deleteContact(c._id)}
                    disabled={deleting === c._id}
                    className="p-2 rounded-full transition hover:bg-red-50"
                    title="Delete"
                  >
                    {deleting === c._id ? (
                      <Loader2 className="w-5 h-5 animate-spin text-rose-600" />
                    ) : (
                      <Trash2 className="w-5 h-5 text-gray-500 hover:text-rose-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

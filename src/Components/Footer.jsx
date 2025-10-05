// src/Components/Footer.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import footerVideo from "../assets/video.mp4";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const holderRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduce) return; // faqat poster qoladi

    const el = holderRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPlay(true);
        io.disconnect();
      }
    }, { rootMargin: '200px 0px' });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="relative text-white py-[100px] px-[5%] overflow-hidden">
      {/* BG holder — posterga aniq o'lcham bering (CLS yo'q) */}
      <div ref={holderRef} className="absolute inset-0 z-0">
        {!play ? (
          <img
            src="/fallback.jpg"
            alt=""
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/fallback.jpg"
            aria-hidden="true"
          >
            <source src={footerVideo} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="absolute inset-0 bg-[#2a5e91]/80 z-10" />

      {/* Asosiy kontent (o'z kontentingiz shu yerda) */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-6 flex-wrap">
        {/* ...sizdagi bo'limlar... */}
      </div>
    </footer>
  );
};
export default Footer;

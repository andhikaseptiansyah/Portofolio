"use client";

import React, { useState } from 'react'; /* Impor useState hook dari React */
import Link from 'next/link'; /* Impor Link dari next/link */
import { 
  Zap, 
  Server, 
  Database, 
  ExternalLink,
  X // Impor ikon X untuk tombol tutup
} from 'lucide-react'; /* Impor ikon dari lucide-react */

const GoRakoPage = () => {
  /* Definisikan status untuk mengontrol apakah video diperbesar */
  const [isZoomed, setIsZoomed] = useState(false); /* Status untuk video yang diperbesar, defaultnya false */

  return (
    <>
      <style>{`
        /* ============================
           GLOBAL VARIABLES & RESET
           ============================ */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .page-wrapper {
          min-height: 100vh;
          background-color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          position: relative;
          color: #111827;
        }
        
        .brand-header-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 260px;
          background-color: #1d4ed8; /* Blue Theme */
          z-index: 0;
          overflow: hidden;
        }

        .brand-header-bg::after {
          content: "";
          position: absolute;
          right: -50px;
          top: 20px;
          width: 300px;
          height: 300px;
          background-color: rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          filter: blur(40px);
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
          position: relative;
          z-index: 1;
        }

        /* MENGGUNAKAN CSS GRID AREAS UNTUK MENGATUR POSISI */
        .layout-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          grid-template-areas:
            "header right"
            "modules right";
          column-gap: 60px;
          row-gap: 32px;
          align-items: flex-start;
        }

        .header-section {
          grid-area: header;
        }

        .modules-section {
          grid-area: modules;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .right-col {
          grid-area: right;
          display: flex;
          flex-direction: column;
        }

        .breadcrumbs {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          color: #e5e7eb; 
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .breadcrumbs a {
          text-decoration: none;
        }
        
        .breadcrumbs .brand-text {
          color: #bfdbfe; 
          cursor: pointer;
        }

        .breadcrumbs .brand-text:hover {
          text-decoration: underline;
        }

        .breadcrumbs .separator {
          color: #bfdbfe; 
          font-size: 12px;
        }

        .breadcrumbs .current {
          color: #ffffff; 
          font-weight: 600;
        }

        .main-heading {
          font-size: clamp(40px, 5vw, 56px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
          color: #ffffff; 
        }

        .sub-heading {
          font-size: 20px;
          font-weight: 500;
          color: #e5e7eb; 
        }

        .module-item h2 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #111827;
          letter-spacing: -0.01em;
        }

        .module-item p {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.6;
        }

        /* ============================
           RIGHT COLUMN (CARD)
           ============================ */
        .enroll-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 50px -12px rgba(0,0,0,0.1);
          border: 1px solid #f3f4f6;
        }

        /* Gaya Video Baru dengan Interaksi */
        .video-container {
          width: 100%;
          position: relative; /* Penting untuk penempatan tombol tutup */
          margin-bottom: 24px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #f3f4f6;
          background-color: #f9fafb; /* Warna background jika video belum load */
          transition: all 0.3s ease-in-out; /* Transisi halus untuk pembesaran */
          cursor: pointer; /* Indikasikan klik-untuk-perbesar */
        }

        .video-item {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: all 0.3s ease-in-out; /* Transisi halus */
        }

        /* Gaya diperbesar (modal layar penuh) */
        .video-container.is-zoomed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 9999; /* Sangat tinggi untuk modal */
          background-color: rgba(0, 0, 0, 0.9); /* Latar belakang gelap */
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0;
          border: none;
          margin-bottom: 0;
          padding: 24px;
          cursor: default; /* Kembalikan kursor default di area latar belakang */
        }

        .video-container.is-zoomed .video-item {
          width: auto;
          height: auto;
          max-width: 90vw;
          max-height: 90vh;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
          object-fit: contain; /* Tampilkan proporsi video asli */
          cursor: zoom-out; /* Indikasikan klik-untuk-perkecil pada video itu sendiri */
        }

        /* Gaya untuk Tombol Tutup Video yang Diperbesar */
        .close-video-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2); /* Latar belakang semi-transparan */
          color: #ffffff; /* Ikon putih */
          border: none;
          border-radius: 50%; /* Bulat */
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          z-index: 10000; /* Sedikit lebih tinggi dari video */
          opacity: 0; /* Tersembunyi secara default */
          pointer-events: none; /* Jangan tangkap klik saat tersembunyi */
        }

        /* Tampilkan tombol tutup saat video diperbesar */
        .video-container.is-zoomed .close-video-btn {
          opacity: 1;
          pointer-events: auto; /* Tangkap klik saat ditampilkan */
        }

        .close-video-btn:hover {
          background: rgba(255, 255, 255, 0.4); /* Efek hover lebih terang */
        }

        .project-title {
          font-size: 24px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .project-company {
          font-size: 15px;
          font-weight: 600;
          color: #1d4ed8;
          margin-bottom: 4px;
        }

        .project-period {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .tech-stack-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .tech-badge {
          background-color: #f3f4f6; /* Uncolored tech badge */
          color: #4b5563;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 20px;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .feature-icon {
          color: #facc15; /* Keep yellow feature icon */
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-text {
          font-size: 14.5px;
          color: #374151;
          font-weight: 500;
          line-height: 1.5;
        }

        .demo-btn {
          width: 100%;
          background-color: #1d4ed8;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          padding: 16px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .demo-btn:hover {
          background-color: #1e40af;
        }

        /* ============================
           MEDIA QUERY (MOBILE)
           ============================ */
        @media (max-width: 992px) {
          .layout-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "header"
              "right"
              "modules";
            row-gap: 48px;
          }
          .brand-header-bg { 
            height: 320px; 
          }
          .breadcrumbs {
            margin-top: 12px;
          }
        }
      `}</style>

      <div className="page-wrapper">
        <div className="brand-header-bg"></div>
        
        <div className="content-container">
          <div className="layout-grid">
            
            {/* AREA 1: JUDUL & BREADCRUMBS */}
            <div className="header-section">
              <div className="breadcrumbs">
                <Link href="/">
                  <span className="brand-text">Home</span>
                </Link>
                <span className="separator">▸</span>
                <span className="current">GoRako</span>
              </div>
              
              <h1 className="main-heading">GoRako Waste Management</h1>
              <p className="sub-heading">Interactive Educational Campaign & Web Platform</p>
            </div>

            {/* AREA 2: EXPLANATION/MODULES */}
            <div className="modules-section">
              <div className="module-item">
                <h2>Project Overview</h2>
                <p>
                  Contributed to the Event Organizer team for the GoRako Waste Management project by planning, 
                  promoting, and executing educational activities aimed at raising environmental awareness.
                </p>
              </div>
              
              <div className="module-item">
                <h2>Interactive Web Platform</h2>
                <p>
                 Developed the campaign's official website designed to educate users through interactive elements. 
                  The platform features engaging quizzes, a custom waste-sorting game, and a comprehensive digital reward system.
                </p>
              </div>

              <div className="module-item">
                <h2>Impact & Engagement</h2>
                <p>
                  Successfully executed the campaign and engaged a large number of student visitors. The interactive 
                  approach effectively raised awareness about proper waste management and garnered highly positive feedback 
                  from the community.
                </p>
              </div>
            </div>

            {/* AREA 3: SHOWCASE CARD */}
            <div className="right-col">
              <div className="enroll-card">
                
                {/* Kontainer Video yang Diperbarui untuk Interaksi */}
                {/* Gunakan templat string untuk menambahkan kelas `is-zoomed` secara kondisional */}
                <div 
                  className={`video-container ${isZoomed ? 'is-zoomed' : ''}`}
                  /* Jika diperbesar, klik pada latar belakang gelap akan menutup video */
                  onClick={() => isZoomed && setIsZoomed(false)} 
                >
                  {/* Tombol Tutup Video yang Diperbesar */}
                  <button 
                    className="close-video-btn" 
                    onClick={(e) => {
                      e.stopPropagation(); // Hentikan penyebaran klik agar tidak memicu klik kontainer
                      setIsZoomed(false); // Tutup pembesaran video
                    }}
                    title="Tutup video"
                  >
                    <X size={24} /> {/* Ikon X dengan ukuran 24px */}
                  </button>

                  <video 
                    src="/gorako.mp4" /* Jalur sumber video */
                    className="video-item"
                    controls
                    /* Atribut autoPlay dan loop telah dihapus */
                    muted
                    playsInline
                    /* Tambahkan event handler klik untuk mengubah status pembesaran */
                    onClick={(e) => {
                        /* Hentikan penyebaran klik agar klik pada video itu sendiri dapat menangani pembesaran/pengecilan */
                        e.stopPropagation(); 
                        setIsZoomed(!isZoomed); // Ubah status pembesaran
                    }}
                  >
                    Maaf, browser Anda tidak mendukung pemutaran video.
                  </video>
                </div>
                
                <h3 className="project-title">GoRako</h3>
                <p className="project-company">Event Organizer & Web Developer</p>
                <p className="project-period">March 2026</p>
                
                <div className="tech-stack-group">
                  <span className="tech-badge">PHP</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">Chatbot Integration</span>
                </div>

                <div className="feature-list">
                  <div className="feature-item">
                    <Zap className="feature-icon" />
                    <span className="feature-text">Developed the campaign's official website featuring interactive quizzes and a waste-sorting game.</span>
                  </div>
                  <div className="feature-item">
                    <Server className="feature-icon" />
                    <span className="feature-text">Integrated a digital reward system to incentivize proper waste management education.</span>
                  </div>
                  <div className="feature-item">
                    <Database className="feature-icon" />
                    <span className="feature-text">Successfully engaged 70 student visitors and achieved a 100% positive feedback rate.</span>
                  </div>
                </div>

              

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GoRakoPage;
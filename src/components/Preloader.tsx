'use client';

import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Kunci scroll saat Preloader muncul agar tidak bisa digeser
    document.body.style.overflow = 'hidden';

    // Memulai transisi keluar layar ditarik ke atas
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2400); 

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      // 2. Buka kunci scroll saat Preloader sudah benar-benar hilang
      document.body.style.overflow = '';
    }, 3200);

    return () => {
      // Pastikan scroll terbuka kembali jika komponen di-unmount secara paksa
      document.body.style.overflow = '';
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style>{`
        .preloader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            /* Gunakan 100dvh agar pas penuh di layar HP, mencegah address bar error */
            height: 100dvh; 
            background-color: var(--bg-blue);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            /* Transisi lancip (tanpa border-radius) */
            transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
            border-radius: 0;
        }

        .preloader-container.exit {
            transform: translateY(-100%);
            /* Hapus radius agar ujung kiri & kanan tetap lancip saat ditarik ke atas */
            pointer-events: none;
        }

        .brand-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
            overflow: hidden; 
            padding: 10px 20px;
        }

        .preloader-sugi {
            background: white;
            color: black;
            padding: 8px 18px;
            border-radius: 14px 14px 14px 0; 
            font-weight: 900;
            font-size: 32px;
            opacity: 0;
            transform: translateY(100%);
            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        .preloader-dev {
            background: var(--lime);
            color: black;
            padding: 8px 18px;
            border-radius: 25px;
            font-weight: 900;
            font-size: 32px;
            opacity: 0;
            transform: scale(0) rotate(-15deg);
            animation: popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
        }

        /* --- DESAIN LOADING BAR BARU --- */
        .loading-wrapper {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            opacity: 0;
            /* Muncul setelah logo Dev selesai mental */
            animation: fadeIn 0.4s ease 1s forwards; 
        }

        .loading-text {
            color: rgba(255, 255, 255, 0.5);
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 5px;
            text-transform: uppercase;
            font-family: 'Courier New', Courier, monospace; 
        }

        .loading-track {
            width: 220px;
            height: 2px;
            background: rgba(255, 255, 255, 0.15);
            position: relative;
            overflow: hidden;
            border-radius: 2px;
        }

        .loading-fill {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: var(--lime);
            width: 0%;
            box-shadow: 0 0 10px var(--lime);
            animation: realisticLoad 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 1.2s forwards;
        }

        /* Titik putih menyala di ujung progress bar */
        .loading-fill::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 15px;
            height: 100%;
            background: white;
            box-shadow: -5px 0 15px white, 0 0 10px white;
            border-radius: 50%;
            animation: pulseTip 0.4s infinite alternate;
        }

        /* --- KEYFRAMES --- */
        @keyframes slideUp {
            0% { opacity: 0; transform: translateY(100%); }
            100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes popIn {
            0% { opacity: 0; transform: scale(0.3) rotate(-15deg); }
            60% { opacity: 1; transform: scale(1.1) rotate(5deg); }
            100% { opacity: 1; transform: scale(1) rotate(0deg); box-shadow: 0 10px 30px rgba(204, 255, 0, 0.4); }
        }

        @keyframes fadeIn {
            to { opacity: 1; }
        }

        @keyframes realisticLoad {
            0% { width: 0%; }
            20% { width: 35%; }
            45% { width: 40%; } 
            75% { width: 85%; }
            100% { width: 100%; }
        }
        
        @keyframes pulseTip {
            0% { opacity: 0.6; }
            100% { opacity: 1; }
        }
      `}</style>

      <div className={`preloader-container ${isExiting ? 'exit' : ''}`}>
        <div className="brand-wrapper">
          <span className="preloader-sugi">Dhika</span>
          <span className="preloader-dev">DEV</span>
        </div>
        
        <div className="loading-wrapper">
          <div className="loading-text">INITIALIZING...</div>
          <div className="loading-track">
            <div className="loading-fill"></div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Preloader;
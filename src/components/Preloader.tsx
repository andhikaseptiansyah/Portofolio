'use client';

import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2600); 

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 3400);

    return () => {
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
            height: 100dvh;
            background-color: var(--bg-blue);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.8s ease;
        }

        .preloader-container.exit {
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
        }

        .content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
        }

        .avatar-container {
            position: relative;
            width: 120px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transform: scale(0.85);
            animation: avatarEnter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .avatar-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-top-color: var(--lime);
            border-radius: 50%;
            animation: spinRing 1.2s linear infinite;
        }

        .preloader-avatar {
            width: 85%;
            height: 85%;
            object-fit: contain;
            position: relative;
            z-index: 1;
        }

        .brand-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
            opacity: 0;
            transform: translateY(15px);
            animation: fadeUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards;
        }

        .preloader-sugi {
            background: white;
            color: black;
            padding: 6px 16px;
            border-radius: 12px 12px 12px 0;
            font-weight: 900;
            font-size: 20px;
        }

        .preloader-dev {
            background: var(--lime);
            color: black;
            padding: 6px 16px;
            border-radius: 20px;
            font-weight: 900;
            font-size: 20px;
        }

        .loading-track {
            width: 180px;
            height: 2px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            opacity: 0;
            transform: translateY(10px);
            animation: fadeUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s forwards;
        }

        .loading-fill {
            height: 100%;
            background: var(--lime);
            width: 0%;
            border-radius: 2px;
            box-shadow: 0 0 10px var(--lime);
            animation: loadProgress 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
        }

        @keyframes avatarEnter {
            to { opacity: 1; transform: scale(1); }
        }

        @keyframes spinRing {
            to { transform: rotate(360deg); }
        }

        @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loadProgress {
            0% { width: 0%; }
            45% { width: 65%; }
            100% { width: 100%; }
        }

        @media (max-width: 768px) {
            .avatar-container { width: 100px; height: 100px; }
            .preloader-sugi, .preloader-dev { font-size: 16px; padding: 5px 12px; }
            .loading-track { width: 150px; }
        }
      `}</style>

      <div className={`preloader-container ${isExiting ? 'exit' : ''}`}>
        <div className="content-wrapper">
          
          <div className="brand-wrapper">
            <span className="preloader-sugi">Dhika</span>
            <span className="preloader-dev">DEV</span>
          </div>
          
          <div className="loading-track">
            <div className="loading-fill"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
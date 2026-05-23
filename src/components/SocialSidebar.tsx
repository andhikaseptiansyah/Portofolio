"use client";

import React, { useState, useEffect, useRef } from 'react';

const SocialSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  // Gunakan useRef untuk menyimpan timer agar bisa diakses oleh event mouse
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fungsi untuk memulai hitungan mundur 1.5 detik
  const startHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true); // Munculkan saat scroll
      startHideTimer();   // Mulai/reset timer
    };

    // Jalankan timer saat pertama kali web dimuat
    startHideTimer();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  // Event ketika mouse masuk ke area sidebar (Desktop)
  const handleMouseEnter = () => {
    setIsVisible(true); // Pastikan sidebar muncul
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current); // Hentikan timer menghilang!
    }
  };

  // Event ketika mouse keluar dari area sidebar (Desktop)
  const handleMouseLeave = () => {
    startHideTimer(); // Jalankan ulang timer 1.5 detik
  };

  return (
    <>
      <style>{`
        .socials {
            position: fixed; 
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 999; 
            transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
            opacity: 1;
            visibility: visible;
        }

        .socials.hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none; 
        }

        .socials a {
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            border-radius: 12px;
            color: white;
            text-decoration: none;
            font-size: 20px;
            background: rgba(0, 0, 0, 0.15); 
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            overflow: hidden; 
        }

        .socials a:nth-child(3),
        .socials a:nth-child(4) {
            background: var(--lime); 
            color: black; 
        }

        .socials a i {
            position: absolute;
            right: 12px; 
            width: 20px;
            text-align: center;
            transition: color 0.3s ease;
        }

        .socials a .social-text {
            font-size: 13px;
            font-weight: 700;
            margin-left: 12px;
            opacity: 0;
            white-space: nowrap;
            transition: opacity 0.2s ease;
        }

        .socials a:hover {
            width: 130px; 
        }

        .socials a:hover .social-text {
            opacity: 1;
            transition-delay: 0.1s; 
        }

        .socials a.hover-blue:hover {
            background: var(--dark-blue);
            color: white;
            border-color: var(--dark-blue);
            box-shadow: 0 4px 15px rgba(5, 27, 133, 0.3);
        }

        .socials a.hover-blue:active {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px var(--dark-blue);
            transform: scale(0.95);
        }

        .socials a.hover-lime:hover {
            background: var(--lime);
            color: black;
            border-color: var(--lime);
            box-shadow: 0 4px 15px rgba(204, 255, 0, 0.3);
        }

        .socials a.hover-lime:active {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px var(--lime);
            transform: scale(0.95);
        }

        /* --- RESPONSIVE MOBILE --- */
        @media (max-width: 768px) {
            .socials {
                top: auto;
                bottom: 25px;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: row;
                gap: 15px;
                
                background: rgba(0, 0, 0, 0.25); 
                padding: 10px 20px;
                border-radius: 35px;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.15);
            }

            .socials a {
                flex-shrink: 0; 
            }

            .socials a i {
                right: 50%;
                transform: translateX(50%);
            }

            .socials a:hover {
                width: 45px; 
            }

            .socials a .social-text {
                display: none; 
            }
        }
        
        @media (max-width: 480px) {
            .socials {
                gap: 12px;
                padding: 8px 15px;
            }
            
            .socials a {
                width: 40px;
                height: 40px;
                font-size: 18px;
            }
            
            .socials a:hover {
                width: 40px;
            }
        }
      `}</style>
      
      {/* Tambahkan onMouseEnter dan onMouseLeave di sini */}
      <aside 
        className={`socials ${isVisible ? '' : 'hidden'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="https://github.com/andhikaseptiansyah" target="_blank" rel="noreferrer" className="hover-blue">
          <span className="social-text">GitHub</span>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/andhika-septiansyah" target="_blank" rel="noreferrer" className="hover-blue">
          <span className="social-text">LinkedIn</span>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="andhikaseptiansyah63@gmail.com" className="hover-lime">
          <span className="social-text">Email</span>
          <i className="fa-solid fa-envelope"></i>
        </a>
      </aside>
    </>
  );
};

export default SocialSidebar;
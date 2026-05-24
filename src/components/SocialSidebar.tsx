"use client";

import React, { useState, useEffect, useRef } from 'react';

const SocialSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isEmailExpanded, setIsEmailExpanded] = useState(false);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

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
      setIsVisible(true); 
      startHideTimer();   
    };

    startHideTimer();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true); 
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current); 
    }
  };

  const handleMouseLeave = () => {
    startHideTimer(); 
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setIsEmailExpanded(true);
    navigator.clipboard.writeText("andhikaseptiansyah63@gmail.com");

    setTimeout(() => {
      setIsEmailExpanded(false);
    }, 3000);
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
            transition: all 0.3s ease;
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

        /* --- PERBAIKAN DI SINI --- */
        .socials a.email-expanded,
        .socials a.email-expanded:hover {
            width: 300px; /* Dilebarkan dari 280px ke 300px */
        }
        
        .socials a.email-expanded .social-text {
            opacity: 1;
            transition-delay: 0s;
            padding-right: 32px; /* Memberi jarak aman agar teks tidak menabrak ikon */
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

        .socials a.hover-lime:hover,
        .socials a.hover-lime.email-expanded {
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

            /* --- PERBAIKAN MOBILE --- */
            .socials a.email-expanded,
            .socials a.email-expanded:hover {
                width: 270px; /* Disesuaikan untuk mobile */
            }

            .socials a.email-expanded .social-text {
                display: block; 
                font-size: 11px; /* Font agak dikecilkan sedikit di HP */
                margin-left: 10px;
                padding-right: 28px; /* Jarak aman di mobile */
            }

            .socials a.email-expanded i {
                right: 12px;
                transform: none; 
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
            .socials a.email-expanded,
            .socials a.email-expanded:hover {
                width: 250px; 
            }
            .socials a.email-expanded .social-text {
                font-size: 10px;
            }
        }
      `}</style>
      
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
        
        <a 
          href="#" 
          onClick={handleEmailClick}
          className={`hover-lime ${isEmailExpanded ? 'email-expanded' : ''}`}
        >
          <span className="social-text">
            {isEmailExpanded ? "andhikaseptiansyah63@gmail.com" : "Email"}
          </span>
          <i className={isEmailExpanded ? "fa-solid fa-check" : "fa-solid fa-envelope"}></i>
        </a>
      </aside>
    </>
  );
};

export default SocialSidebar;
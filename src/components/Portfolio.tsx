'use client';

import React, { useEffect } from 'react';

const Portfolio: React.FC = () => {
  useEffect(() => {
    // Membuat observer untuk mendeteksi elemen saat masuk ke layar (Scroll Animation)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 } // Elemen muncul saat 15% bagiannya terlihat di layar
    );

    const hiddenElements = document.querySelectorAll('.animate-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ============================
           GLOBAL & HEADER STYLES
           ============================ */
        .portfolio-wrapper {
            background-color: #ffffff; /* Putih penuh menyatu dengan fitur */
            padding-bottom: 120px;
            overflow-x: hidden;
        }

        .portfolio-header {
            padding: 40px 5% 60px; 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .portfolio-title {
            font-size: clamp(40px, 11vw, 150px); 
            font-weight: 900;
            color: black;
            line-height: 1;
            letter-spacing: -3px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap; 
        }

        .portfolio-o {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 0.9em;
            height: 0.9em;
            margin: 0 0.02em;
        }

        .portfolio-o i.fa-certificate {
            font-size: 0.9em;
            color: black;
        }

        .portfolio-o .inner-square {
            position: absolute;
            width: 0.28em;
            height: 0.28em;
            background-color: var(--lime);
            transform: rotate(25deg); 
            border-radius: 4px;
            box-shadow: 0 0 20px rgba(204, 255, 0, 0.6); /* Efek glowing modern */
        }

        .portfolio-desc {
            font-size: 15px;
            color: #666;
            margin-top: 30px;
            line-height: 1.8;
            max-width: 600px;
            font-weight: 500;
        }

        .portfolio-established {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 60px;
            width: 100%;
            max-width: 500px;
        }

        .portfolio-established .line {
            flex: 1;
            height: 1px;
            background-color: #EAEAEA;
        }

        .portfolio-established .text {
            font-size: 12px;
            font-weight: 800;
            color: #888;
            letter-spacing: 3px;
        }

        /* ============================
           GALLERY STYLES
           ============================ */
        .works-section {
            padding: 20px 5%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .works-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .works-header h2 {
            font-size: 34px;
            font-weight: 900;
            color: black;
            text-transform: uppercase;
            letter-spacing: -1px;
            margin-bottom: 10px;
        }

        .works-header p {
            font-size: 15px;
            color: #777;
            font-weight: 500;
        }

        .works-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            width: 100%;
            max-width: 1200px;
        }

        .work-item {
            position: relative;
            border-radius: 30px;
            overflow: hidden;
            height: 480px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.06);
            cursor: pointer;
            transform: translateZ(0); /* Hardware acceleration */
        }

        .work-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .work-item:hover img {
            transform: scale(1.08); /* Skala zoom saat di-hover */
        }

        /* OVERLAY GELAP SAAT HOVER */
        .work-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%);
            opacity: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 40px 30px;
            transition: opacity 0.4s ease;
        }

        .work-item:hover .work-overlay {
            opacity: 1;
        }

        .overlay-tag {
            background: var(--lime);
            color: black;
            font-size: 10px;
            font-weight: 800;
            padding: 6px 14px;
            border-radius: 20px;
            width: fit-content;
            margin-bottom: 15px;
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        .overlay-title {
            color: white;
            font-size: 26px;
            font-weight: 800;
            line-height: 1.2;
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }

        .work-item:hover .overlay-tag,
        .work-item:hover .overlay-title {
            transform: translateY(0);
            opacity: 1;
        }

        /* PLAY BUTTON KHUSUS VIDEO */
        .play-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 26px;
            padding-left: 6px; 
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 2;
        }

        .video-item:hover .play-btn {
            background: var(--lime);
            color: black;
            border-color: var(--lime);
            box-shadow: 0 10px 30px rgba(204, 255, 0, 0.5);
            transform: translate(-50%, -50%) scale(1.15);
        }

        /* ============================
           SCROLL ANIMATION CLASSES
           ============================ */
        .animate-hidden {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-hidden.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Delay khusus agar elemen muncul bergantian */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        /* ============================
           RESPONSIVE MOBILE
           ============================ */
        @media (max-width: 768px) {
            .portfolio-title { font-size: 15vw; }
            .works-gallery { gap: 20px; }
            .work-item { height: 400px; }
            .overlay-title { font-size: 22px; }
        }
      `}</style>

      <div className="portfolio-wrapper">
        <section className="portfolio-header animate-hidden">
          <div className="portfolio-title">
            P
            <span className="portfolio-o">
              <i className="fa-solid fa-certificate"></i>
              <span className="inner-square"></span>
            </span>
            RTFOLIO
          </div>

          <p className="portfolio-desc animate-hidden delay-100">
            A curated selection of digital works where engineering <br />
            meets art, creating meaningful interactions through clean <br />
            code.
          </p>

          <div className="portfolio-established animate-hidden delay-200">
            <span className="line"></span>
            <span className="text">ESTABLISHED 2026</span> 
            <span className="line"></span>
          </div>
        </section>

        <section className="works-section">
          <div className="works-header animate-hidden">
            <h2>WORKS COLLECTION</h2>
            <p>A journey through curated visuals and motion design</p>
          </div>

          <div className="works-gallery">
            {/* ITEM 1 */}
            <div className="work-item animate-hidden delay-100">
              {/* Added loading="lazy" */}
              <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop" alt="UI Design Works" loading="lazy" />
              <div className="work-overlay">
                <span className="overlay-tag">WEB DESIGN</span>
                <h3 className="overlay-title">E-Commerce<br />Dashboard UI</h3>
              </div>
            </div>

            {/* ITEM 2 (VIDEO) */}
            <div className="work-item video-item animate-hidden delay-200">
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop" alt="Motion Graphic Dog" loading="lazy" />
              <div className="play-btn">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="work-overlay">
                <span className="overlay-tag">MOTION GRAPHICS</span>
                <h3 className="overlay-title">3D Character<br />Animation</h3>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="work-item animate-hidden delay-300">
              <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop" alt="Forest Visuals" loading="lazy" />
              <div className="work-overlay">
                <span className="overlay-tag">BRAND IDENTITY</span>
                <h3 className="overlay-title">Nature Inspired<br />Visual Assets</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
"use client";

import React, { useState, useRef, useEffect } from 'react';

const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Array data untuk setiap slide (Fluensia, GoRako, GoKantin)
  const slides = [
    {
      id: 1,
      type: "image",
      src: "/fluenesia.png",
      alt: "Fluensia - Indonesian Language Course Platform",
      title: "Fluensia - Indonesian Language Course Platform",
      description: "Successfully developed and launched an online Indonesian language course platform with 40% improvement in page load speed. Built using React + Vite, TypeScript, Express.js, and Supabase with 99.9% system uptime.",
      link: "https://frontfluensia.vercel.app/",
    },
    {
      id: 2,
      type: "video",
      src: "/gorako.mp4",
      poster: "/images/gorako-poster.jpg",
      alt: "GoRako - Waste Management Campaign",
      title: "GoRako - Waste Management Campaign",
      description: "Developed an interactive campaign website featuring quizzes, waste-sorting games, and digital reward system. Successfully engaged 70 student visitors with 100% positive feedback rate, raising awareness about proper waste management.",
      link: "/projects/gorako",
    },
    {
      id: 3,
      type: "image",
      src: "/gokantin.jpeg",
      alt: "GoKantin - Online Food Ordering Website",
      title: "GoKantin - Online Food Ordering Website",
      description: "Designed and developed a comprehensive food ordering website with user login, digital menu, cart system, order tracking, and admin panel. Digitized campus food ordering process for improved efficiency.",
      link: "/projects/gokantin",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle auto-play video saat slide berubah ke video
  useEffect(() => {
    const currentItem = slides[currentSlide];
    if (currentItem.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, [currentSlide]);

  const currentData = slides[currentSlide];

  return (
    <>
      <style>{`
        .portfolio-container {
            background-color: #ffffff;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
        }

        /* ============================
           TOP SECTION
           ============================ */
        .featured-section {
            padding: 80px 5% 100px;
            max-width: 1300px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 60px;
        }

        .featured-media {
            flex: 1.2;
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        .featured-media img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            aspect-ratio: 16/10;
            transition: transform 0.5s ease;
        }

        .featured-media img:hover {
            transform: scale(1.02);
        }

        .featured-media video {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            aspect-ratio: 16/10;
        }

        /* Slider container */
        .slider-container {
            position: relative;
            width: 100%;
        }

        /* Navigation arrows */
        .slider-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0,0,0,0.6);
            backdrop-filter: blur(4px);
            color: white;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 20px;
            z-index: 10;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.3);
        }

        .slider-arrow:hover {
            background-color: var(--lime, #ccff00);
            color: #111;
            transform: translateY(-50%) scale(1.05);
        }

        .slider-arrow-left {
            left: 15px;
        }

        .slider-arrow-right {
            right: 15px;
        }

        /* Slide dots indicator */
        .slider-dots {
            position: absolute;
            bottom: 15px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 10px;
            z-index: 10;
        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .dot.active {
            background-color: var(--lime, #ccff00);
            width: 24px;
            border-radius: 10px;
        }

        .featured-content {
            flex: 1;
            transition: all 0.3s ease;
        }

        /* Animasi fade untuk konten */
        .fade-in {
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .featured-content h2 {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 800;
            color: #1A36F6;
            line-height: 1.2;
            margin-bottom: 20px;
            letter-spacing: -1px;
        }

        .featured-content p {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .detail-link {
            font-size: 15px;
            font-weight: 700;
            color: #ffffff; 
            background-color: #1A36F6; 
            padding: 12px 28px; 
            border-radius: 8px; 
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease; 
            box-shadow: 0 4px 15px rgba(26, 54, 246, 0.2); 
            border: 2px solid transparent;
        }

        .detail-link:hover {
            gap: 12px; 
            background-color: var(--lime, #ccff00); 
            color: #111111; 
            transform: translateY(-3px); 
            box-shadow: 0 8px 25px rgba(204, 255, 0, 0.4); 
        }

        /* Slide counter / indicator teks */
        .slide-counter {
            position: absolute;
            bottom: 15px;
            right: 20px;
            background-color: rgba(0,0,0,0.6);
            backdrop-filter: blur(4px);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            z-index: 10;
            font-family: monospace;
        }

        /* ============================
           STATS BAR
           ============================ */
        .stats-wrapper {
            position: relative;
            z-index: 10;
            display: flex;
            justify-content: center;
            padding: 0 20px;
            margin-top: -60px;
        }

        .stats-bar {
            background-color: #1A36F6;
            border-radius: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 60px;
            gap: 50px;
            width: 100%;
            max-width: 900px;
            box-shadow: 0 0 0 12px #ffffff; 
        }

        .stat-item {
            text-align: center;
            position: relative;
        }

        .stat-item:not(:last-child)::after {
            content: '';
            position: absolute;
            right: -25px;
            top: 10%;
            height: 80%;
            width: 1px;
            background-color: rgba(255,255,255,0.3);
        }

        .stat-item h3 {
            font-size: 28px;
            font-weight: 800;
            margin: 0 0 5px 0;
            color: #ffffff;
        }

        .stat-item p {
            font-size: 13px;
            color: #e0e0e0;
            margin: 0;
            font-weight: 500;
        }

        /* ============================
           BOTTOM SECTION (DESKTOP)
           ============================ */
        .bottom-section {
            background-color: #1A36F6;
            padding: 75px 5% 50px;
            margin-top: -50px;
            border-radius: 40px 40px 0 0;
        }

        .bottom-content {
            max-width: 1200px; 
            margin: 0 auto;
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            gap: 50px; 
        }

        .bottom-text {
            flex: 1.5; 
            max-width: 700px;
        }

        .bottom-text h2 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 15px;
            color: #ccff00;
        }

        .bottom-text p {
            font-size: 16px;
            color: #ffffff;
            line-height: 1.7;
            margin-bottom: 25px; 
            text-align: justify;
        }

        .bottom-image {
            flex: 0 0 240px;
            width: 240px;
            height: 330px; 
            position: relative; 
            display: flex;
            justify-content: center;
            align-items: flex-end; 
            filter: drop-shadow(0 15px 25px rgba(0,0,0,0.2));
            transform: translate(60px, 25px);
        }

        .avatar-circle-mask {
            width: 240px;
            height: 240px;
            background-color: var(--lime, #ccff00);
            border-radius: 50%;
            position: absolute;
            bottom: 0; 
            overflow: hidden; 
            z-index: 1;
        }

        .avatar-base {
            width: 100%;
            height: auto;
            position: absolute;
            bottom: 0;
            left: 0;
        }

        .avatar-popout {
            width: 240px; 
            height: auto;
            position: absolute;
            bottom: 0;
            z-index: 2;
            clip-path: inset(0% 18% 45% 18%);
        }

        /* ============================
           RESPONSIVE MOBILE
           ============================ */
        @media (max-width: 992px) {
            .featured-section {
                flex-direction: column;
                padding-top: 60px;
            }
            .featured-media, .featured-content {
                width: 100%;
            }
            .stats-bar {
                flex-wrap: wrap;
                gap: 30px;
                padding: 25px 20px;
                border-radius: 30px;
                justify-content: center;
            }
            .stat-item:not(:last-child)::after {
                display: none;
            }
            
            .stats-bar {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 25px;
                max-width: 500px;
            }
            
            .stat-item h3 {
                font-size: 24px;
            }
            
            .stat-item p {
                font-size: 12px;
            }
            
            .bottom-content {
                flex-direction: column; 
                text-align: center;
            }

            .bottom-image {
                order: 1; 
                flex: 0 0 auto; 
                width: 200px; 
                height: 280px; 
                margin: 0 auto 20px auto; 
                transform: translate(0, 50px);
            }

            .bottom-text {
                order: 2; 
                max-width: 100%;
                margin-top: 20px;
            }

            .avatar-circle-mask {
                width: 200px;
                height: 200px;
                bottom: 0;
            }

            .avatar-popout {
                width: 200px;
                clip-path: inset(-20% 10% 40% 10%);
                position: absolute;
                bottom: -10px;
                left: 0;
                right: 0;
                margin: 0 auto;
            }

            .avatar-base {
                width: 100%;
                bottom: -10px;
            }
        }

        @media (max-width: 480px) {
            .stats-bar {
                gap: 20px;
                padding: 20px 15px;
            }
            
            .stat-item h3 {
                font-size: 20px;
            }
            
            .stat-item p {
                font-size: 11px;
            }
            
            .bottom-image {
                transform: translate(0, 60px);
                height: 290px;
            }
            
            .avatar-popout {
                clip-path: inset(-25% 8% 45% 8%);
                bottom: -15px;
            }
            
            .avatar-base {
                bottom: -15px;
            }

            .slider-arrow {
                width: 36px;
                height: 36px;
                font-size: 16px;
            }

            .slide-counter {
                font-size: 10px;
                padding: 3px 10px;
            }
        }
      `}</style>

      <div className="portfolio-container">
        <section className="featured-section">
          <div className="featured-media">
            <div className="slider-container">
              {currentData.type === 'video' ? (
                <video 
                  ref={videoRef}
                  key={currentSlide}
                  src={currentData.src}
                  poster={currentData.poster}
                  controls
                  playsInline
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img 
                  key={currentSlide}
                  src={currentData.src} 
                  alt={currentData.alt} 
                />
              )}
              {/* Left Arrow */}
              <div className="slider-arrow slider-arrow-left" onClick={prevSlide}>
                ❮
              </div>
              {/* Right Arrow */}
              <div className="slider-arrow slider-arrow-right" onClick={nextSlide}>
                ❯
              </div>
              {/* Dots indicator */}
              <div className="slider-dots">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`dot ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
              {/* Slide counter */}
              <div className="slide-counter">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
          
          {/* Konten yang berubah sesuai slide */}
          <div className="featured-content" key={currentSlide}>
            <div className="fade-in">
              <h2>{currentData.title}</h2>
              <p>{currentData.description}</p>
              <a href={currentData.link} className="detail-link" target="_blank" rel="noopener noreferrer">
                View Detail Project
              </a>
            </div>
          </div>
        </section>

        <div className="stats-wrapper">
          <div className="stats-bar">
            <div className="stat-item">
              <h3>3</h3>
              <p>Projects</p>
            </div>
            <div className="stat-item">
              <h3>React + Vite</h3>
              <p>Main Stack</p>
            </div>
            <div className="stat-item">
              <h3>Supabase</h3>
              <p>Database</p>
            </div>
            <div className="stat-item">
              <h3>Full Stack</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>

        <section className="bottom-section">
          <div className="bottom-content">
            <div className="bottom-text">
              <h2>Andhika Septiansyah</h2>
              <p>Information Technology undergraduate student at President University with a strong foundation in web development, graphic design, and cloud computing. Adept at translating business needs into functional digital solutions through hands-on experience in project management and technology implementation. Eager to drive impactful and innovative tech solutions.</p>
            </div>
            <div className="bottom-image">
              <div className="avatar-circle-mask">
                <img src="/avatar2.png" alt="Andhika" className="avatar-base" />
              </div>
              <img src="/avatar2.png" alt="Andhika" className="avatar-popout" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
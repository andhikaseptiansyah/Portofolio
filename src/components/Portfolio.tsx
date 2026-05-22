"use client";

import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <>
      <style>{`
        .portfolio-container {
            background-color: #ffffff;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
        }

        /* ============================
           TOP SECTION (FEATURED)
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
        }

        .play-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: var(--lime, #ccff00);
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            font-size: 24px;
            padding-left: 5px;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(204, 255, 0, 0.4);
            transition: transform 0.3s ease;
        }

        .play-btn:hover {
            transform: translate(-50%, -50%) scale(1.1);
        }

        .featured-content {
            flex: 1;
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

        /* ============================
           TOMBOL DETAIL PROJECT
           ============================ */
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

        /* ============================
           STATS BAR (FLOATING)
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
           BOTTOM SECTION (BLUE)
           ============================ */
        .bottom-section {
            background-color: #1A36F6;
            /* DIUBAH: Padding bawah 0 agar gambar menempel pas di batas bawah */
            padding: 75px 5% 0px; 
            margin-top: -50px;
            border-radius: 40px 40px 0 0;
        }

        .bottom-content {
            max-width: 1200px; 
            margin: 0 auto;
            display: flex; 
            /* DIUBAH: Menggunakan flex-end agar konten (terutama gambar) rata bawah */
            align-items: flex-end; 
            justify-content: space-between;
            gap: 50px; 
        }

        /* Area Teks di Kiri */
        .bottom-text {
            flex: 1.5; 
            max-width: 700px;
            /* DIUBAH: Memberikan jarak untuk teks agar tidak ikut turun mentok ke bawah */
            padding-bottom: 50px; 
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
        }

        /* Area Gambar di Kanan */
        .bottom-image {
            flex: 1; 
            display: flex;
            justify-content: center;
        }

        .bottom-image img {
            width: 100%;
            /* DIUBAH: Memperkecil gambar avatar agar box biru tidak ikut memanjang */
            max-width: 240px; 
            height: auto;
            display: block; /* Mencegah ada celah kosong di bawah gambar */
        }

        .btn-primary {
            background-color: #ffffff;
            color: #1A36F6;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 15px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            margin-bottom: 10px; 
        }

        .btn-primary:hover {
            background-color: var(--lime, #ccff00);
            color: #111;
            transform: translateY(-2px);
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
                padding: 30px 40px;
                border-radius: 40px;
                justify-content: center;
            }
            .stat-item:not(:last-child)::after {
                display: none;
            }
            .stat-item {
                flex: 1 1 40%;
            }
            
            .bottom-content {
                flex-direction: column; 
                text-align: center;
                align-items: center; /* Di HP kembali ke center */
            }
            .bottom-text {
                max-width: 100%;
                padding-bottom: 30px; /* Jarak antara teks dan gambar di HP */
            }
            .bottom-image img {
                max-width: 200px; /* Gambar lebih dikecilkan lagi di HP */
            }
        }

        @media (max-width: 480px) {
            .featured-content h2 {
                font-size: 28px;
            }
            .stats-bar {
                box-shadow: 0 0 0 8px #ffffff;
                padding: 25px 20px;
            }
            .stat-item h3 {
                font-size: 24px;
            }
            .bottom-section {
                padding: 70px 5% 0px; /* Pastikan di HP juga nempel bawah */
            }
        }
      `}</style>

      <div className="portfolio-container">
        
        {/* TOP SECTION */}
        <section className="featured-section">
          <div className="featured-media">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="NusaLearn Platform" />
            <div className="play-btn">
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
          
          <div className="featured-content">
            <h2>Let’s Build The Next Future Digital Product</h2>
            <p>
              Explore the intersection of modern design and robust engineering. 
              As a full-stack developer and designer, I build scalable digital solutions 
              tailored to solve real-world problems.
            </p>
            <a href="#projects" className="detail-link">
              Detail Project <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>

        {/* STATS BAR (FLOATING) */}
        <div className="stats-wrapper">
          <div className="stats-bar">
            <div className="stat-item">
              <h3>3</h3>
              <p>Projects</p>
            </div>
            <div className="stat-item">
              <h3>Next.js</h3>
              <p>Main Stack</p>
            </div>
            <div className="stat-item">
              <h3>1</h3>
              <p>Demo Web</p>
            </div>
            <div className="stat-item">
              <h3>Full Stack</h3>
              <p>Web</p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <section className="bottom-section">
          <div className="bottom-content">
            
            {/* Bagian Kiri: Teks */}
            <div className="bottom-text">
              <h2>Dhika Full Stack Dev</h2>
              <p>
               Information Technology undergraduate student at President University with a strong foundation in web
               development, graphic design, and cloud computing. Adept at translating business needs into functional digital
               solutions through hands-on experience in project management and technology implementation. Eager to drive
               impactful and innovative tech solutions.
              </p>
            </div>

            {/* Bagian Kanan: Avatar */}
            <div className="bottom-image">
              <img src="/avatar.png" alt="Dhika Dev Avatar" />
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Portfolio;
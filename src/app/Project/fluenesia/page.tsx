"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Server, 
  Database, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const StartLearningPage = () => {
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
          background-color: #1d4ed8; 
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

        /* Carousel Styles */
        .carousel-container {
          width: 100%;
          position: relative;
          margin-bottom: 24px;
        }

        .image-carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          border-radius: 16px;
          border: 1px solid #f3f4f6;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .image-carousel::-webkit-scrollbar {
          display: none;
        }

        .carousel-item {
          flex: 0 0 100%;
          scroll-snap-align: start;
          height: 220px;
          width: 100%;
          object-fit: cover;
        }

        .scroll-hint {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.9);
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #1d4ed8;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          pointer-events: none;
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
          background-color: #f3f4f6;
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
          color: #facc15;
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
            
            {/* AREA 1: JUDUL & BREADCRUMBS (Akan selalu di atas pada Mobile) */}
            <div className="header-section">
              <div className="breadcrumbs">
                <Link href="/">
                  <span className="brand-text">Home</span>
                </Link>
                <span className="separator">▸</span>
                <span className="current">Fluenesia</span>
              </div>
              
              <h1 className="main-heading">Fluenesia Platform</h1>
              <p className="sub-heading">Online Indonesian Language Course Web Application</p>
            </div>

            {/* AREA 2: EXPLANATION/MODULES (Akan di bawah kartu pada Mobile) */}
            <div className="modules-section">
              <div className="module-item">
                <h2>Project Overview</h2>
                <p>
                  Developed a comprehensive online learning platform from scratch to a fully functional stage. 
                  This project focuses on providing structured learning modules for individuals eager to master 
                  the Indonesian language.
                </p>
              </div>
              
              <div className="module-item">
                <h2>Frontend Optimization</h2>
                <p>
                  Focused on delivering a seamless user experience by creating highly responsive and performant user interfaces. 
                  The combination of React, Vite, and TypeScript significantly reduced page load times.
                </p>
              </div>

              <div className="module-item">
                <h2>Backend & Security</h2>
                <p>
                  Implemented a secure architecture handling student data, content management, and learning progress 
                  tracking efficiently, ensuring high availability and reliability for all users.
                </p>
              </div>
            </div>

            {/* AREA 3: SHOWCASE CARD (Di kanan pada PC, di tengah/setelah judul pada Mobile) */}
            <div className="right-col">
              <div className="enroll-card">
                
                {/* Horizontal Image Carousel */}
                <div className="carousel-container">
                  <div className="image-carousel">
                    <img src="/fluenesia.png" alt="Fluenesia Slide 1" className="carousel-item" />
                    <img src="/fluenesia2.png" alt="Fluenesia Slide 2" className="carousel-item" />
                    <img src="/fluenesia3.png" alt="Fluenesia Slide 3" className="carousel-item" />
                  </div>
                  <div className="scroll-hint">
                    Slide <ChevronRight size={14} />
                  </div>
                </div>
                
                <h3 className="project-title">Fluenesia</h3>
                <p className="project-company">Full Stack Web Developer • Study First</p>
                <p className="project-period">January 2026 - March 2026</p>
                
                <div className="tech-stack-group">
                  <span className="tech-badge">React + Vite</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Express.js</span>
                  <span className="tech-badge">Supabase</span>
                  <span className="tech-badge">PostgreSQL</span>
                </div>

                <div className="feature-list">
                  <div className="feature-item">
                    <Zap className="feature-icon" />
                    <span className="feature-text">Achieved a 40% improvement in page load speed with a highly responsive UI.</span>
                  </div>
                  <div className="feature-item">
                    <Server className="feature-icon" />
                    <span className="feature-text">Designed a secure backend architecture ensuring 99.9% system uptime.</span>
                  </div>
                  <div className="feature-item">
                    <Database className="feature-icon" />
                    <span className="feature-text">Integrated a comprehensive student tracking system & database management.</span>
                  </div>
                </div>

                <a 
                  href="https://frontfluenesia.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="demo-btn"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default StartLearningPage;
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingCart, 
  MapPin, 
  UserCircle, 
  ExternalLink,
  ChevronRight,
  X 
} from 'lucide-react';

const GoKantinPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const carouselImages = [
    "/gokantin.jpeg", "/gokantin2.jpeg", "/gokantin3.jpeg",
    "/gokantin4.jpeg", "/gokantin5.jpeg", "/gokantin6.jpeg",
    "/gokantin7.jpeg", "/gokantin8.jpeg", "/gokantin9.jpeg",
    "/gokantin10.jpeg", "/gokantin11.jpeg", "/gokantin12.jpeg"
  ];

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
          /* DIUBAH: Tinggi dikurangi dari 260px menjadi 210px agar tidak melebihi teks */
          height: 210px; 
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
          /* DIUBAH: Tambahkan margin-top agar teks "Project Overview" aman di area putih */
          margin-top: 24px; 
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
          -ms-overflow-style: none;
          scrollbar-width: none; 
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
          cursor: zoom-in;
          transition: opacity 0.2s;
        }
        
        .carousel-item:hover {
          opacity: 0.9;
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

        /* ============================
           MODAL (LIGHTBOX) STYLES
           ============================ */
        .image-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 24px;
          cursor: zoom-out;
        }

        .image-modal-content {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 12px;
          object-fit: contain;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          cursor: default;
        }

        .close-modal-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background-color: #ffffff;
          color: #111827;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .close-modal-btn:hover {
          background-color: #f3f4f6;
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
            /* DIUBAH: Kurangi juga tinggi di mobile agar proporsional */
            height: 260px; 
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
                <span className="current">GoKantin</span>
              </div>
              
              <h1 className="main-heading">GoKantin Platform</h1>
              <p className="sub-heading">Online Food Ordering Website</p>
            </div>

            {/* AREA 2: EXPLANATION/MODULES */}
            <div className="modules-section">
              <div className="module-item">
                <h2>Project Overview</h2>
                <p>
                  Led the technical development and organization for GoKantin, an online food ordering platform designed 
                  specifically to digitize the campus culinary experience and streamline operations.
                </p>
              </div>
              
              <div className="module-item">
                <h2>Comprehensive Web Features</h2>
                <p>
                  Architected and built the full-stack web application encompassing a robust user authentication system, 
                  an interactive digital menu, a dynamic shopping cart, and a dedicated admin panel for order management.
                </p>
              </div>

              <div className="module-item">
                <h2>Operational Impact</h2>
                <p>
                  Successfully modernized the traditional campus food ordering process, significantly improving transaction 
                  efficiency and providing a seamless, user-friendly digital access point for the campus community.
                </p>
              </div>
            </div>

            {/* AREA 3: SHOWCASE CARD */}
            <div className="right-col">
              <div className="enroll-card">
                
                {/* Horizontal Image Carousel */}
                <div className="carousel-container">
                  <div className="image-carousel">
                    {carouselImages.map((imgSrc, index) => (
                      <img 
                        key={index}
                        src={imgSrc} 
                        alt={`GoKantin Slide ${index + 1}`} 
                        className="carousel-item"
                        onClick={() => setSelectedImage(imgSrc)} 
                      />
                    ))}
                  </div>
                  <div className="scroll-hint">
                    Slide <ChevronRight size={14} />
                  </div>
                </div>
                
                <h3 className="project-title">GoKantin</h3>
                <p className="project-company">Online Food Ordering Website</p>
                <p className="project-period">Project Duration</p>
                
                <div className="tech-stack-group">
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">PHP</span>
                  <span className="tech-badge">Full Stack</span>
                </div>

                <div className="feature-list">
                  <div className="feature-item">
                    <UserCircle className="feature-icon" />
                    <span className="feature-text">Developed comprehensive features including user login and a dedicated admin panel.</span>
                  </div>
                  <div className="feature-item">
                    <ShoppingCart className="feature-icon" />
                    <span className="feature-text">Implemented an interactive digital menu and dynamic cart system.</span>
                  </div>
                  <div className="feature-item">
                    <MapPin className="feature-icon" />
                    <span className="feature-text">Integrated order tracking to improve efficiency and ease of access.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL LIGHTBOX OVERLAY */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <button 
            className="close-modal-btn" 
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};

export default GoKantinPage;
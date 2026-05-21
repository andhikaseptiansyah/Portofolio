import React from 'react';

const SocialSidebar: React.FC = () => {
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
                /* Reset posisi vertikal ke bawah */
                top: auto;
                bottom: 25px;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: row;
                gap: 15px;
                
                /* Efek Dock melayang (Glassmorphism) */
                background: rgba(0, 0, 0, 0.25); 
                padding: 10px 20px;
                border-radius: 35px;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.15);
            }

            .socials a {
                flex-shrink: 0; /* Mencegah tombol menjadi gepeng */
            }

            .socials a i {
                /* Menengahkan ikon secara presisi di layar HP */
                right: 50%;
                transform: translateX(50%);
            }

            /* Matikan efek melebar ke samping (hover text) di HP */
            .socials a:hover {
                width: 45px; 
            }

            .socials a .social-text {
                display: none; /* Sembunyikan teks sepenuhnya di HP */
            }
        }
        
        /* Penyesuaian ekstra untuk layar HP yang lebih kecil */
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
      
      <aside className="socials">
        <a href="https://github.com/Andhika" target="_blank" rel="noreferrer" className="hover-blue">
          <span className="social-text">GitHub</span>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/Andhika" target="_blank" rel="noreferrer" className="hover-blue">
          <span className="social-text">LinkedIn</span>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com/Andhika" target="_blank" rel="noreferrer" className="hover-lime">
          <span className="social-text">Instagram</span>
          <i className="fa-solid fa-camera"></i>
        </a>
        <a href="mailto:emailmu@gmail.com" className="hover-lime">
          <span className="social-text">Email</span>
          <i className="fa-solid fa-envelope"></i>
        </a>
      </aside>
    </>
  );
};

export default SocialSidebar;
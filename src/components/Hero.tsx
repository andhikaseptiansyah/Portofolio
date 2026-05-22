import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <>
      <style>{`
        .hero-section {
            background-color: var(--bg-blue);
            height: 100vh; 
            height: 100dvh; 
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden; 
        }

        /* --- KEYFRAMES UNTUK ANIMASI GAMBAR (ELEGAN & HALUS) --- */
        @keyframes floatAvatar {
            0%, 100% {
                transform: translateX(-50%) translateY(0);
            }
            50% {
                transform: translateX(-50%) translateY(-2.5vh); 
            }
        }

        /* --- AVATAR BACKGROUND --- */
        .bg-avatar {
            position: absolute;
            bottom: -22vh; 
            left: 50%;
            transform: translateX(-50%);
            width: 135vw; 
            height: 125vh; 
            opacity: 0.35; 
            z-index: 0; 
            pointer-events: none; 
            animation: floatAvatar 8s ease-in-out infinite; 
        }

        .avatar-img {
            object-fit: contain;
            object-position: bottom center;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px 20px 80px; 
            position: relative;
            z-index: 10;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 800;
            font-size: 14px;
        }

        .logo .sugi {
            background: white;
            color: black;
            padding: 5px 12px;
            border-radius: 12px 12px 12px 0; 
        }

        .logo .dev {
            background: var(--lime);
            color: black;
            padding: 5px 12px;
            border-radius: 20px;
        }

        /* --- MODIFIKASI TOMBOL DOWNLOAD (SEKARANG MENJADI TAG <a>) --- */
        .hire-me {
            background: transparent;
            color: white;
            border: 1px solid rgba(255,255,255,0.4);
            padding: 8px 20px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.3s;
            text-decoration: none; /* Menghilangkan garis bawah link */
            display: inline-block; /* Memastikan padding bekerja sempurna */
        }

        .hire-me:hover {
            background: white;
            color: var(--bg-blue);
        }

        .hire-me:active {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
            transform: translateY(2px);
        }

        main {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
        }

        .hero-text {
            text-align: center;
            line-height: 0.85;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2; 
            margin-top: 8vh; 
        }

        .text-sugi {
            font-size: 12vw;
            color: var(--lime);
            font-weight: 900;
            letter-spacing: -3px;
            text-shadow: 5px 5px 0px rgba(0,0,0,0.2);
        }

        .text-frontend {
            font-size: 14vw;
            color: white;
            font-weight: 900;
            letter-spacing: -5px;
            margin-top: -10px;
        }

        .text-dev {
            font-size: 14vw;
            color: white;
            font-weight: 900;
            letter-spacing: -5px;
            margin-top: -20px;
        }

        .custom-cursor {
            position: absolute;
            top: 45%;
            right: 25%;
            font-size: 30px;
            color: white;
            filter: drop-shadow(2px 4px 6px black);
            z-index: 100;
            pointer-events: none;
        }

        /* --- RESPONSIVE MOBILE --- */
        @media (max-width: 768px) {
            .bg-avatar {
                width: 175vw;
                height: 100vh; 
                opacity: 0.25; 
                bottom: -12vh; 
            }

            nav {
                padding: 20px 5%; 
            }
            
            .logo .sugi, .logo .dev {
                padding: 4px 10px;
                font-size: 12px;
            }

            .hire-me {
                padding: 6px 15px;
                font-size: 12px;
            }

            .hero-text {
                line-height: 0.95; 
                margin-top: 5vh; 
            }

            .text-sugi {
                font-size: 18vw; 
                letter-spacing: -1px; 
                text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
            }

            .text-frontend {
                font-size: 20vw;
                letter-spacing: -2px;
                margin-top: -5px;
            }

            .text-dev {
                font-size: 20vw;
                letter-spacing: -2px;
                margin-top: -10px;
            }

            .custom-cursor {
                display: none; 
            }
        }

        @media (max-width: 480px) {
            .text-sugi { font-size: 20vw; }
            .text-frontend, .text-dev { font-size: 22vw; }
        }
      `}</style>
      
      <section className="hero-section">
        
        {/* --- AVATAR BACKGROUND --- */}
        <div className="bg-avatar">
          <Image 
            src="/avatar.png" 
            alt="Dhika Character" 
            fill
            priority
            className="avatar-img"
          />
        </div>

        <nav>
          <div className="logo">
            <span className="sugi">Dhika</span>
            <span className="dev">DEV</span>
          </div>
         
          <a 
            href="/CV_Dhika.pdf" 
            download="CV_Dhika.pdf" 
            className="hire-me"
          >
            Download CV
          </a>
        </nav>

        <main>
          <div className="hero-text">
            <div className="text-sugi">Dhika</div>
            <div className="text-frontend">FULL STACK</div>
            <div className="text-dev">DEV</div>
          </div>
          <i className="fa-solid fa-arrow-pointer custom-cursor"></i>
        </main>
      </section>
    </>
  );
};

export default Hero;
import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <style>{`
        .hero-section {
            background-color: var(--bg-blue);
            /* Fallback untuk browser lama */
            height: 100vh; 
            /* Menggunakan dVH agar pas dengan layar HP modern (mengakali address bar) */
            height: 100dvh; 
            display: flex;
            flex-direction: column;
            position: relative;
            /* Mencegah konten biru meluber/scroll berlebih ke bawah */
            overflow: hidden; 
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

        .hire-me {
            background: transparent;
            color: white;
            border: 1px solid rgba(255,255,255,0.4);
            padding: 8px 20px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.3s;
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
            nav {
                /* Mengurangi padding kiri yang tadinya 80px agar proporsional di HP */
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
            }

            .text-sugi {
                font-size: 18vw; 
                letter-spacing: -1px; /* Kurangi minus agar tidak bertumpuk */
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
                display: none; /* Layar HP tidak butuh ikon kursor */
            }
        }

        /* Untuk layar HP yang sangat kecil (seperti iPhone SE) */
        @media (max-width: 480px) {
            .text-sugi { font-size: 20vw; }
            .text-frontend, .text-dev { font-size: 22vw; }
        }
      `}</style>
      
      <section className="hero-section">
        <nav>
          <div className="logo">
            <span className="sugi">Dhika</span>
            <span className="dev">DEV</span>
          </div>
          <button className="hire-me">Download CV</button>
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
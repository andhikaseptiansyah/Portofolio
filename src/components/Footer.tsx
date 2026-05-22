import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        .footer-wrapper {
            background-color: #ffffff; 
            padding-top: 120px; 
            position: relative;
            overflow-x: hidden;
        }

        .footer-section {
            background-color: var(--bg-blue);
            color: white;
            border-radius: 60px 60px 0 0; 
            padding: 80px 5% 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative; 
        }

        .footer-avatar {
            position: absolute;
            right: -3%; 
            bottom: 0; 
            height: calc(100% + 115px); 
            width: auto;
            max-width: 55%; 
            object-fit: contain;
            object-position: bottom right; 
            z-index: 0;
            pointer-events: none;
        }

        .footer-content {
            position: relative;
            z-index: 2; 
            text-align: center;
            margin-bottom: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .footer-heading {
            font-size: clamp(30px, 5vw, 60px);
            font-weight: 900;
            line-height: 1.2;
            letter-spacing: -1px;
        }

        .footer-heading .highlight-lime {
            color: var(--lime);
        }

        .footer-bottom {
            position: relative;
            z-index: 2; 
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 30px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .copyright {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
        }

        /* --- RESPONSIVE MOBILE (TABLET) --- */
        @media (max-width: 768px) {
            .footer-wrapper {
                padding-top: 100px; 
            }

            .footer-section {
                padding: 60px 20px 30px;
                border-radius: 40px 40px 0 0; 
            }

            .footer-avatar {
                max-width: none; 
                height: calc(100% + 100px); 
                right: -10%; 
            }

            .footer-content {
                margin-bottom: 40px; 
                text-align: left; 
                align-items: flex-start;
                padding-right: 55%; 
            }

            .footer-heading {
                font-size: 28px; 
            }

            .footer-bottom {
                flex-direction: column; 
                align-items: flex-start; 
                text-align: left;
                padding-top: 20px;
                gap: 15px;
                padding-right: 55%; 
            }
        }

        /* --- RESPONSIVE MOBILE KECIL (HP) --- */
        @media (max-width: 480px) {
            .footer-wrapper {
                padding-top: 90px;
            }

            .footer-section {
                padding: 45px 20px 25px;
                border-radius: 30px 30px 0 0;
            }

            .footer-avatar {
                height: calc(100% + 85px); 
                max-width: none; 
                /* PERUBAHAN: Digeser ke kanan sedikit agar menjauh dari tombol sosmed */
                right: -15%; 
            }

            .footer-content {
                padding-right: 50%; /* Ruang teks disesuaikan sedikit karena avatar geser kanan */
                margin-bottom: 30px;
            }

            .footer-heading {
                font-size: 24px; 
                line-height: 1.2;
            }

            .footer-bottom {
                padding-right: 50%; 
                gap: 12px;
            }
            
            .logo span.sugi, .logo span.dev {
                font-size: 12px !important;
                padding: 4px 10px !important;
            }
            
            .copyright {
                font-size: 11px;
            }
        }
      `}</style>

      <div className="footer-wrapper">
        <footer className="footer-section">
          
          <img src="/avatar.png" alt="Dhika Avatar" className="footer-avatar" />

          <div className="footer-content">
            <h2 className="footer-heading">Let's create something <br /> <span className="highlight-lime">amazing together.</span></h2>
          </div>
          
          <div className="footer-bottom">
            <div className="logo">
              <span className="sugi" style={{ background: 'white', color: 'black', padding: '5px 12px', borderRadius: '12px 12px 12px 0', fontWeight: 800, fontSize: '14px' }}>Dhika</span>
              <span className="dev" style={{ background: 'var(--lime)', color: 'black', padding: '5px 12px', borderRadius: '20px', fontWeight: 800, fontSize: '14px', marginLeft: '5px' }}>DEV</span>
            </div>
            
            <div className="copyright">
              © 2026 Dhika Dev. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
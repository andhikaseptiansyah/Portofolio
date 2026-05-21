import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        .footer-wrapper {
            background-color: #ffffff; /* Diubah ke putih bersih agar menyatu dengan elemen di atasnya */
            padding-top: 20px;
        }

        .footer-section {
            background-color: var(--bg-blue);
            color: white;
            border-radius: 60px 60px 0 0; 
            padding: 80px 5% 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .footer-content {
            text-align: center;
            margin-bottom: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
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

        /* --- RESPONSIVE MOBILE --- */
        @media (max-width: 768px) {
            .footer-section {
                padding: 60px 20px 30px;
                border-radius: 40px 40px 0 0; /* Lengkungan sedikit dikurangi */
            }

            .footer-content {
                margin-bottom: 40px; /* Jarak ke bawah diperkecil */
            }

            .footer-heading {
                font-size: 32px; /* Menyesuaikan ukuran teks judul */
            }

            .footer-bottom {
                flex-direction: column; /* Mengubah susunan logo dan teks menjadi atas-bawah */
                justify-content: center;
                text-align: center;
                padding-top: 20px;
                gap: 15px;
            }
        }

        @media (max-width: 480px) {
            .footer-section {
                padding: 50px 20px 20px;
                border-radius: 30px 30px 0 0;
            }

            .footer-heading {
                font-size: 28px;
            }
        }
      `}</style>

      <div className="footer-wrapper">
        <footer className="footer-section">
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
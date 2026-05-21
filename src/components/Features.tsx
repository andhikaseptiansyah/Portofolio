import React from 'react';

const Features: React.FC = () => {
  return (
    <>
      <style>{`
        .features-section {
            background-color: #ffffff; /* Diubah menjadi full putih bersih */
            border-radius: 60px 60px 0 0; /* Ujung atas tetap melengkung (tidak lancip) */
            padding: 60px 5%; 
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
            width: 100%; /* Memastikan kontainer menutupi layar penuh ke samping */
            box-sizing: border-box;
            margin: 0;
        }

        .feature-card {
            background: white;
            border-radius: 30px;
            padding: 50px 30px;
            width: 100%;
            max-width: 350px;
            height: 380px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.06); /* Shadow dipertajam agar kartu terlihat di atas background putih */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .feature-content {
            text-align: center;
            margin-top: 10px;
        }

        .feature-title {
            color: black;
            font-size: 28px;
            font-weight: 900;
            line-height: 1.2;
            letter-spacing: -0.5px;
        }

        .feature-subtitle {
            color: #777;
            font-size: 13px;
            margin-top: 15px;
            font-weight: 500;
        }

        .card-widget {
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 20px;
        }

        .widget-pill-1 {
            background: var(--bg-blue);
            border-radius: 40px;
            display: flex;
            align-items: center;
            padding: 10px 55px 10px 10px; 
            gap: 12px;
            position: relative;
        }

        .widget-avatar {
            width: 38px;
            height: 38px;
            background-color: #E5C3A6;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }

        .widget-text-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .widget-name {
            color: white;
            font-size: 14px;
            font-weight: 800;
            line-height: 1.1;
        }

        .widget-stack {
            color: rgba(255,255,255,0.7);
            font-size: 10px;
            font-weight: 500;
            margin-top: 2px;
        }

        .widget-tag-lime {
            position: absolute;
            right: -10px; 
            bottom: -18px; 
            background: var(--lime);
            color: black;
            font-size: 12px;
            font-weight: 800;
            padding: 6px 16px;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(204, 255, 0, 0.4);
        }

        .widget-pill-2 {
            background: var(--bg-blue);
            border-radius: 40px;
            display: flex;
            align-items: center;
            padding: 16px 45px 16px 30px; 
            gap: 25px;
            position: relative;
        }

        .widget-tech-text {
            color: white;
            font-size: 14px;
            font-weight: 800;
        }

        .widget-circle-btn {
            position: absolute;
            bottom: -15px;
            right: -5px; 
            width: 40px;
            height: 40px;
            background: var(--lime);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            font-size: 16px;
            box-shadow: 0 8px 20px rgba(204, 255, 0, 0.4);
            cursor: pointer;
            transition: transform 0.2s;
        }

        .widget-circle-btn:hover {
            transform: scale(1.1);
        }

        .widget-bubble {
            background: var(--lime);
            color: black;
            padding: 22px 45px;
            border-radius: 24px 24px 24px 4px; 
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 10px 30px rgba(204, 255, 0, 0.2);
        }

        .widget-bubble-title {
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.5px;
        }

        .widget-bubble-count {
            font-size: 34px;
            font-weight: 900;
            line-height: 1.1;
        }

        /* --- RESPONSIVE MOBILE --- */
        @media (max-width: 768px) {
            .features-section {
                padding: 50px 20px;
                border-radius: 40px 40px 0 0; /* Sudut kiri kanan atas dipertahankan melengkung */
                gap: 25px; 
                width: 100%;
                box-sizing: border-box; /* Mencegah elemen keluar dari lebar layar */
            }

            .feature-card {
                padding: 40px 20px;
                height: 320px; 
                max-width: 100%; /* Memastikan kartu penuh di dalam kontainernya */
            }

            .feature-title {
                font-size: 24px; 
            }

            .feature-subtitle {
                font-size: 12px;
            }
        }

        @media (max-width: 480px) {
            .features-section {
                border-radius: 30px 30px 0 0;
            }

            .widget-pill-1 {
                padding: 10px 45px 10px 10px; 
            }
            
            .widget-pill-2 {
                padding: 12px 35px 12px 20px;
                gap: 15px;
            }

            .widget-tag-lime {
                font-size: 10px;
                padding: 5px 12px;
                right: -5px;
            }
        }
      `}</style>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-content">
            <div className="feature-title">BUILD<br />FAST UIS</div>
            <div className="feature-subtitle">pixel-perfect, performant interfaces</div>
          </div>
          <div className="card-widget">
            <div className="widget-pill-1">
              <div className="widget-avatar">👨🏾‍🦲</div>
              <div className="widget-text-group">
                <div className="widget-name">dhika.dev</div>
                <div className="widget-stack">React • Next.js</div>
              </div>
              <div className="widget-tag-lime">TypeScript</div>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-content">
            <div className="feature-title">CLEAN<br />CODEBASE</div>
            <div className="feature-subtitle">maintainable, scalable architecture</div>
          </div>
          <div className="card-widget">
            <div className="widget-pill-2">
              <div className="widget-tech-text">shadcn/ui</div>
              <div className="widget-tech-text">Tailwind</div>
              <div className="widget-circle-btn">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-content">
            <div className="feature-title">SHIP<br />ON TIME</div>
            <div className="feature-subtitle">reliable delivery, every sprint</div>
          </div>
          <div className="card-widget">
            <div className="widget-bubble">
              <div className="widget-bubble-title">PROJECTS DONE</div>
              <div className="widget-bubble-count">42+</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
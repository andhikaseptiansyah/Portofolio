import React from 'react';

const Services: React.FC = () => {
  return (
    <>
      <style>{`
        .services-section {
            background-color: #FAFAFA; 
            padding: 40px 5% 120px;
            display: flex;
            justify-content: center;
        }

        .services-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 60px;
            max-width: 1100px;
            width: 100%;
            flex-wrap: wrap;
        }

        .services-left {
            flex: 1;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .services-subtitle {
            font-size: 12px;
            font-weight: 800;
            color: #888;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .services-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .services-list h2 {
            font-size: 55px;
            font-weight: 900;
            color: black;
            line-height: 1.1;
            letter-spacing: -2px;
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .services-list h2:hover {
            color: var(--bg-blue);
        }

        .services-right {
            flex: 1.2;
            min-width: 350px;
            display: flex;
            flex-direction: column;
            gap: 25px;
            position: relative;
        }

        .services-heading {
            font-size: 38px;
            font-weight: 800;
            color: black;
            line-height: 1.2;
            letter-spacing: -1px;
        }

        .services-heading .highlight-blue {
            color: var(--bg-blue);
        }

        .services-desc {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
            font-weight: 500;
            max-width: 90%;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }

        .tech-pill {
            padding: 8px 18px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .tech-pill.blue {
            background-color: var(--bg-blue);
            color: white;
        }

        .tech-pill.lime {
            background-color: var(--lime);
            color: black;
        }

        .experience-card {
            background: white;
            border-radius: 16px;
            padding: 20px 25px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.06);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: fit-content;
            border: 1px solid #F0F0F0;
            transform: rotate(-3deg);
            align-self: flex-end;
            margin-top: -30px;
            margin-right: 20px;
            transition: transform 0.3s ease;
        }

        .experience-card:hover {
            transform: rotate(0deg) translateY(-5px);
        }

        .exp-number {
            font-size: 45px;
            font-weight: 900;
            color: var(--bg-blue);
            line-height: 1;
        }

        .exp-text {
            font-size: 11px;
            font-weight: 700;
            color: #888;
            text-align: center;
            margin-top: 5px;
            letter-spacing: 0.5px;
        }
      `}</style>

      <section className="services-section">
        <div className="services-container">
          <div className="services-left">
            <div className="services-subtitle">OUR SERVICES</div>
            <div className="services-list">
              <h2>Branding</h2>
              <h2>Web design</h2>
              <h2>Illustration</h2>
            </div>
          </div>

          <div className="services-right">
            <div className="services-heading">
              Crafting digital <br /> <span className="highlight-blue">experiences</span> that matter.
            </div>
            
            <div className="services-desc">
              Specializing in building high-performance web applications with a focus on clean code and exceptional user experience.
            </div>
            
            <div className="tech-stack">
              <span className="tech-pill blue">REACT</span>
              <span className="tech-pill lime">NEXT.JS</span>
              <span className="tech-pill blue">TYPESCRIPT</span>
              <span className="tech-pill lime">TAILWIND</span>
              <span className="tech-pill blue">FRAMER MOTION</span>
              <span className="tech-pill lime">NODE.JS</span>
            </div>
            
            <div className="experience-card">
              <div className="exp-number">3+</div>
              <div className="exp-text">YEARS OF<br />EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
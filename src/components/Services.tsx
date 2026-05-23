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
            background: #E8E8E8;
            border-radius: 16px;
            padding: 12px 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            width: fit-content;
            border: 1px solid #D0D0D0;
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
            font-size: 32px;
            font-weight: 900;
            color: var(--bg-blue);
            line-height: 1;
        }

        .exp-text {
            font-size: 10px;
            font-weight: 700;
            color: #666;
            text-align: left;
            letter-spacing: 0.5px;
            line-height: 1.3;
        }

        @media (max-width: 768px) {
            .services-list h2 {
                font-size: 40px;
            }
            .services-heading {
                font-size: 28px;
            }
            .services-desc {
                max-width: 100%;
            }
            .experience-card {
                margin-top: 0;
                align-self: flex-start;
            }
        }
      `}</style>

      <section className="services-section">
        <div className="services-container">
          <div className="services-left">
            <div className="services-subtitle">MY SKILLS</div>
            <div className="services-list">
              <h2>Web Dev</h2>
              <h2>AI & API</h2>
              <h2>UI/UX</h2>
            </div>
          </div>

          <div className="services-right">
            <div className="services-heading">
              Building <span className="highlight-blue">full-stack</span> solutions <br /> with modern tech.
            </div>
            
            <div className="services-desc">
              Front-end & back-end development specialist. Experienced in React, TypeScript, Express.js, and Supabase. Also skilled in AI API integration and machine learning fundamentals.
            </div>
            
            <div className="tech-stack">
              <span className="tech-pill blue">HTML/CSS</span>
              <span className="tech-pill lime">JavaScript</span>
              <span className="tech-pill blue">React</span>
              <span className="tech-pill lime">TypeScript</span>
              <span className="tech-pill blue">PHP</span>
              <span className="tech-pill lime">Express.js</span>
              <span className="tech-pill blue">Supabase</span>
              <span className="tech-pill lime">PostgreSQL</span>
              <span className="tech-pill blue">Git/GitHub</span>
              <span className="tech-pill lime">AI Integration</span>
            </div>
            
            <div className="experience-card">
              <div className="exp-number">&lt;1</div>
              <div className="exp-text">YEAR OF<br />EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
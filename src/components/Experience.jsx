import { Briefcase, Calendar, Award, MapPin, FolderOpen } from "lucide-react";

const portfolioData = {
  experience: [
    {
      company: "HCL Tech",
      position: "Front-End Developer",
      period: "2024 - Present",
      location: "Sri Lanka",
      responsibilities: [
        "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js.",
        "Collaborated with designers and back-end developers to ensure seamless user experience.",
        "Optimized front-end performance, reducing page load time by X%.",
        "Used version control systems like Git/GitHub for collaborative development.",
        "Implemented modern UI/UX practices and accessibility standards (WCAG).",
        "Worked within Agile development cycles using Git, GitHub, and Jira for version control and task tracking."
      ],
      achievements: [
        "Increased user engagement by X% after redesigning core web components.",
        "Improved SEO and site performance, achieving a Google Lighthouse score of 95+.",
        "Delivered project ahead of deadline, contributing to client satisfaction and repeat business."
      ],
      tools: [
        "Git/GitHub", "REST APIs", "JavaScript", "HTML5", "CSS", "Figma", "Postman", "Docker"
      ]
    },
    {
      company: "Atlassian",
      position: "Junior Front-End Developer",
      period: "2023 - 2024",
      location: "Sri Lanka",
      responsibilities: [
        "Assisted in developing responsive web pages using React, Tailwind CSS, and TypeScript.",
        "Collaborated with the design team to translate Figma mockups into interactive UI components.",
        "Improved website performance by optimizing images and reducing bundle size, leading to a 20% faster load time.",
        "Participated in daily stand-ups and code reviews, gaining practical exposure to Agile/Scrum methodologies.",
        "Integrated APIs for features like contact forms, maps, and dynamic content updates.",
        "Deployed and maintained client websites using GitHub Pages and Notify.",
        "Delivered projects on time and provided post-launch support for clients."
      ]
    }
  ]
};

const gradientLine = {
  width: "80px",
  height: "4px",
  background: "linear-gradient(90deg, #3b82f6 0%, #a21caf 100%)",
  borderRadius: "999px",
  transition: "background 0.4s"
};

const gradientMiniDot = {
  width: "8px",
  height: "8px",
  background: "linear-gradient(135deg, #3b82f6, #a21caf)",
  borderRadius: "50%",
  marginTop: "8px",
  flexShrink: 0,
  boxShadow: "0 0 8px #a21caf44"
};

const Experience = () => (
  <div className="min-vh-100 bg-light animate-fadeIn" style={{ animation: "fadeIn 1s" }}>
    <section className="container p-4 position-relative" id="experience" style={{ scrollMarginTop: "80px" }}>
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="p-2 bg-primary bg-opacity-10 rounded shadow animate-pop">
            <Briefcase className="text-primary" size={28} />
          </div>
          <h2
            className="h2 fw-bold text-gradient m-0"
            style={{
              background: "linear-gradient(90deg,#3b82f6 40%,#a21caf 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Experience
          </h2>
        </div>
        <div style={gradientLine} className="mb-2"></div>
      </div>

      <div className="d-flex flex-column gap-4">
        {portfolioData.experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-4 shadow-lg border border-0 overflow-hidden transition position-relative exp-card"
            style={{
              transition: "box-shadow 0.3s, transform 0.3s",
              boxShadow: "0 6px 32px #3b82f633",
              borderLeft: "6px solid #a21caf"
            }}
            tabIndex={0}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.01)";
              e.currentTarget.style.boxShadow = "0 12px 48px #a21caf33";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 6px 32px #3b82f633";
            }}
          >
            <div className="bg-light p-4 border-bottom">
              <div className="d-flex flex-column gap-3">
                <div>
                  <h3 className="h5 fw-bold text-dark mb-2 animate-pop">{exp.company}</h3>
                  <div className="d-flex align-items-center gap-2 text-primary fw-medium mb-2">
                    <Award size={18} className="me-1" />
                    <span>{exp.position}</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-2">
                  <div className="d-flex align-items-center gap-2 text-secondary bg-white px-3 py-2 rounded shadow-sm">
                    <Calendar size={16} />
                    <span className="fw-medium">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="d-flex align-items-center gap-2 text-secondary bg-white px-3 py-2 rounded shadow-sm">
                      <MapPin size={16} />
                      <span className="fw-medium">{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4">
              {/* Responsibilities */}
              {exp.responsibilities && (
                <div className="mb-4">
                  <h4 className="h6 fw-semibold text-secondary mb-3 d-flex align-items-center gap-2">
                    <FolderOpen size={20} className="text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="list-unstyled m-0">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i} className="d-flex align-items-start gap-3 text-secondary lh-lg">
                        <span style={gradientMiniDot}></span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {exp.achievements && (
                <div className="mb-4">
                  <h4 className="h6 fw-semibold text-secondary mb-3 d-flex align-items-center gap-2">
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "linear-gradient(135deg,#3b82f6,#a21caf)",
                        borderRadius: "50%",
                        display: "inline-block",
                        boxShadow: "0 0 8px #3b82f6aa"
                      }}
                    ></span>
                    Key Achievements
                  </h4>
                  <ul className="list-unstyled m-0">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="d-flex align-items-start gap-3 text-secondary lh-lg">
                        <span style={gradientMiniDot}></span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools */}
              {exp.tools && (
                <div>
                  <h4 className="h6 fw-semibold text-secondary mb-3 d-flex align-items-center gap-2">
                    <FolderOpen size={20} className="text-primary" />
                    Tools & Technologies
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    {exp.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-primary bg-opacity-10 text-primary rounded-pill text-sm fw-medium border border-primary border-opacity-25"
                        style={{
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          transition: "background 0.3s, color 0.3s",
                          boxShadow: "0 1px 6px #3b82f633"
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.background = "#a21caf22";
                          e.currentTarget.style.color = "#a21caf";
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.background = "rgba(59,130,246,0.1)";
                          e.currentTarget.style.color = "#3b82f6";
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .animate-fadeIn { animation: fadeIn 1s; }
        .animate-pop { animation: popIn 0.8s cubic-bezier(.5,-0.3,.5,1.5); }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(12px);} 100% { opacity: 1; transform: none;} }
        @keyframes popIn { 0% { transform: scale(0.85);} 60% { transform: scale(1.08);} 100% { transform: scale(1);} }
        .exp-card:focus { outline: 2px solid #a21caf99; outline-offset: 2px; }
      `}</style>
    </section>
  </div>
);

export default Experience;

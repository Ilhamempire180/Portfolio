const portfolioData = {
  personal: {
    name: "Mohamed Ilham",
    title: "Software Engineer",
    subtitle: "BEng (Hons) in Software Engineer",
    university: "ESoft Metro Campus",
    email: "ilhamempire101@gmail.com",
    phone: "+94 75 213 6383",
    linkedin: "https://www.linkedin.com/in/ilham-mohamed-8696331b8/",
    github: "https://github.com/Ilhamempire180",
    location: "Sri Lanka",
    description: "Passionate software engineer with expertise in full-stack development, specializing in modern web technologies and innovative solutions."
  },
  education: [
    {
      institution: "Esoft Metro Campus",
      degree: "BEng (Hons) in Software Engineering",
      period: "2022 - 2023",
      gpa: "3.6",
      description: "Strong foundation in software development and computer networking with hands-on experience in building applications, debugging, and deploying systems."
    },
    {
      institution: "BCAS Campus, Sri Lanka",
      degree: "Higher National Diploma in Software Engineering",
      period: "2019 - 2021",
      description: "Enhanced English communication, grammar, and professional writing skills."
    },
    {
      institution: "Zahira College Kalmunai",
      degree: "GCE Advanced Level (Physical Science Stream)",
      period: "Jan 2016 - Aug 2017",
      description: "Studied Mathematics, Physics, and Chemistry with leadership experience as school prefect."
    }
  ],
  experience: [
    {
      company: "CloudTech Solutions",
      position: "Software Engineering Intern",
      period: "Feb 2024 - Aug 2024",
      location: "Colombo 05, Sri Lanka",
      projects: ["Staysure 1.5", "Avanti Travel Insurance"],
      achievements: [
        "Worked on projects for UK-based companies",
        "Developed RESTful APIs and integrated backend functionality",
        "Gained experience with WordPress and Magnolia CMS",
        "Used Jira for project tracking and Confluence for collaboration",
        "Applied Agile methodologies in development processes",
        "Created responsive user interfaces with React"
      ]
    }
  ],
  skills: {
    languages: ["C", "C#", "Java", "JavaScript", "TypeScript", "PHP", "Python"],
    frameworks: ["React", "Redux", "Node.js", "Express.js", ".NET"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Git/GitHub", "Selenium", "Postman", "Figma", "Canva", "VS Code", "IntelliJ IDEA"]
  },
  projects: [
    {
 
  title: "Train Ticket Booking System",
  description: "A full-stack web application designed to digitize train ticket booking and tracking. The system enables passengers to register, search, and book trains online, while conductors can manage train schedules and passenger details efficiently. It enhances data accuracy, reduces manual errors, and streamlines the overall booking process.",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  github: "https://github.com/Ilhamempire180/Ticket-Booking-System",
  category: "Full Stack"


    },{
  title: "Personal Portfolio Website",
  description: "A responsive personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies to provide smooth navigation, interactive animations, and a clean design for presenting professional information effectively.",
  technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  github: "https://github.com/Ilhamempire180/Portfolio",
  category: "Frontend"
}

,
    {
      title: "CRUD Application",
      description: "Dynamic React application with full Create, Read, Update, and Delete functionality.",
      technologies: ["React"],
      github: "",
      category: "Web App"
    },
    {
      title: "Weather App",
      description: "Responsive weather application displaying real-time data via API integration.",
      technologies: ["React", "Weather API"],
      github: "",
      category: "Web App"
    }
  ],
  publications: [
    {
      title: "An Ensemble Model for Predicting Career Paths of Sri Lankan IT Undergraduates",
      authors: "S. L. M. Rukais, S. Adeeba, B. T. G. S. Kumara and G. A. C. A. Herath",
      conference: "8th International Research Conference on Smart Computing and Systems Engineering",
      year: "2025",
      type: "Full Paper"
    }
  ]
};

export default portfolioData;
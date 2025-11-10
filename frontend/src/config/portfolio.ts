export const portfolioConfig = {
  personal: {
    name: "Mark Jaemerl Diestro",
    title: "Web Developer & Technical Support",
    bio: "Driven software engineer with a strong focus on building scalable, high-performance web applications and thoughtful, user-centric interfaces. I specialize in transforming complex requirements into clean, maintainable solutions that enhance usability and deliver measurable results. I’m fueled by curiosity and a passion for solving real-world problems through technology. Collaboration is where I thrive — whether it’s brainstorming innovative features, refining architecture with teammates, or mentoring others to grow alongside me. I actively pursue continuous learning, staying current with evolving tools, frameworks, and industry best practices to ensure my work remains modern, efficient, and impactful.",
    email: "markjaemerldiestro@gmail.com",
    resumeUrl: "/Resume-Diestro.pdf",
  },

  skills: [
    { name: "TypeScript", logo: "/logos/typescript.svg" },
    { name: "React", logo: "/logos/react.svg" },
    { name: "Node.js", logo: "/logos/nodedotjs.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "TailwindCSS", logo: "/logos/tailwindcss.svg" },
    { name: "Framer Motion", logo: "/logos/framer-motion.svg" },
    { name: "Git", logo: "/logos/git.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "Axios", logo: "/logos/axios.svg" },
    { name: "Express", logo: "/logos/express.svg" },
    { name: "Trouble Shooting", logo: "/logos/troubleshooting.svg" },
  ],

  projects: [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "My personal portfolio for formalities purposes",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: ["TypeScript", "React", "Express", "MongoDB", "TailwindCSS"],
      githubUrl: "https://github.com/mcjimirl/Personal-Portfolio",
      liveUrl: "https://project1.example.com",
    },
    {
      id: 2,
      title: "To-Do App",
      description:
        "It's a modern To-Do App that's like a progress report management system that lets the user track their task for efficient progress.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: ["TypeScript", "React", "Express", "MongoDB", "TailwindCSS"],
      githubUrl: "https://github.com/mcjimirl/Todo-App",
      liveUrl: "https://project2.example.com",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "An intelligent content creation tool powered by machine learning algorithms.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: ["Python", "React", "OpenAI", "FastAPI"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.example.com",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization dashboard for tracking business metrics and KPIs.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: ["React", "D3.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://project4.example.com",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      achievements: [
        "Led a team of 5 developers in building a scalable microservices architecture",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      achievements: [
        "Built responsive web applications for 20+ clients",
        "Introduced modern frontend tooling and best practices",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Startup Ventures",
      period: "2019 - 2020",
      achievements: [
        "Developed features for a SaaS product used by 10k+ users",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Participated in agile development and sprint planning",
      ],
    },
  ],

  social: {
    github: "https://github.com/mcjimirl",
    linkedin: "https://www.linkedin.com/in/mark-jaemerl-diestro-04029b372/",
    facebook: "https://facebook.com/markjaemerldiestro",
    website: "https://yourwebsite.com",
  },
};

import nice from "../assets/testimonies/nicenvrro.png";
import vincent from "../assets/testimonies/Vncnt.png";
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
    { name: "Networking", logo: "/logos/network.svg" },
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
      title: "AI ChatBot",
      description: "An intelligent chat-bot tool.",
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
      role: "Full Stack Developer",
      company: "Wayne Enterprise Solution Corp.",
      period: "2025 - Present",
      location: "Full-Time",
      imageUrl:
        "https://placehold.co/600x400/0E7490/ffffff?text=Wayne+Enterprise+Project",
      achievements: [
        "Led a team of 5 developers in building a scalable Web and Mobile Application",
        "Improved application performance by 40% through optimization.",
        "Improved User Friendliness for efficiency.",
      ],
    },
    {
      id: 2,
      role: "Capstone Documentation",
      company: "Capstone Project",
      period: "2024 - 2025",
      location: "Remote",
      imageUrl:
        "https://placehold.co/600x400/2563EB/ffffff?text=Cacao+Classification+App",
      achievements: [
        "Created a Mobile Application for Classifying Cacao Variety and Fruit maturity.",
        "Under Machine Learning - Deep Learning",
        "Flutter for Mobile App Development and Kaggle for Training",
      ],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Philippine Innovative Hub Academy Corp.",
      period: "2025 Feb - 2025 Apr",
      location: "Full-Time",
      imageUrl:
        "https://placehold.co/600x400/9333EA/ffffff?text=PIHAC+System+UI",
      achievements: [
        "Developed features for the systems developed by the team in the company",
        "Collaborated with designers to implement the design in figma to hard code",
        "Participated in agile development",
      ],
    },
  ],

  social: {
    github: "https://github.com/mcjimirl",
    linkedin: "https://www.linkedin.com/in/mark-jaemerl-diestro-04029b372/",
    facebook: "https://facebook.com/markjaemerldiestro",
    website: "https://yourwebsite.com",
  },

  testimonials: [
    {
      id: 1,
      quote:
        "I’ve worked with Mr. Diestro on several projects, and he consistently brings solid technical judgment and practical problem-solving skills. Collaborating with him has always been straightforward—he communicates clearly, follows through, and brings real value to every project he touches.",
      reviewer: "Nice Navarro",
      role: "Software Developer",
      company: "Wayne Enterprise Solution Corp.",
      imageUrl: nice,
      rating: 5,
      github: "https://github.com/nicenvrro-dev",
      website: "https://www.nicenvrro.site",
    },
    {
      id: 2,
      quote:
        "Working with Mark Jaemerl Diestro has been inspiring. As a full stack software developer, his dedication, eagerness to learn, and consistent delivery of good - quality output show how committed he is to becoming better every day - all while staying humble.",
      reviewer: "Mc Vincent Paredes",
      role: "UI/UX Designer and Software Developer",
      company: "Quantum Cloud Corporation",
      imageUrl: vincent,
      rating: 5,
      github: "https://github.com/EmsiPrds",
      website: "https://mcvincentparedes.vercel.app",
    },
    {
      id: 3,
      quote: "Ang pogi sobra ni Merl. Lagi ko pa sya napapanaginipan hay.",
      reviewer: "Dovie Charizard",
      role: "Masarap Sakalin",
      company: "Taga Rizal lang",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      github: "https://github.com/janedoe-dev",
      website: "https://janedoe.com/portfolio",
    },
    {
      id: 4,
      quote:
        "A highly collaborative and patient mentor. Mark's ability to simplify complex technical challenges and communicate them clearly significantly accelerated our team's adoption of TypeScript.",
      reviewer: "Michael Brown",
      role: "Team Lead",
      company: "Tech Innovators Inc.",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      github: "https://github.com/janedoe-dev",
      website: "https://janedoe.com/portfolio",
    },
    {
      id: 5,
      quote:
        "Mark's technical support skills are outstanding. He quickly diagnoses issues and provides clear, effective solutions, making him an invaluable asset to any team.",
      reviewer: "Sarah Wilson",
      role: "Operations Manager",
      company: "Global Solutions",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      github: "https://github.com/janedoe-dev",
      website: "https://janedoe.com/portfolio",
    },
  ],
};

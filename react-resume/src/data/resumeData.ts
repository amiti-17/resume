export interface Project {
  title: string;
  link: string;
  technologies: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  school: string;
  program: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  about: string;
  contacts: {
    phone: string;
    email: string;
    github?: string;
    linkedin?: string;
  };
  projects: Project[];
  skills: {
    tech: SkillCategory[];
    soft: string[];
  };
  education: Education[];
  experience: Experience[]; // Added for future use, though not in original HTML
}

export const resumeData: ResumeData = {
  name: "Shkandiuk Tymofii",
  title: "Front-End Developer",
  location: "Kyiv, Ukraine",
  about:
    "Hi, I'm Timofii (Tim) Shkandiuk. Now I am living in Kyiv, Ukraine but I am ready to relocate. Graduated from Taras Shevchenko University in Kyiv with a Bachelor's Degree in Cyber Security! In parallel with my studies, I came through courses and practiced on various projects! Such as JavaScript (learn.javascript.ru) and (Quantum computing on Coursera as addition for my student education-program)! I like to learn new things and apply knowledge in practice! (The most important thing is practice, I believe from my experience) Thanks!",
  contacts: {
    phone: "+380639483011",
    email: "timotey0412@gmail.com",
  },
  projects: [
    {
      title: "Hell English",
      link: "https://hellenglish.goit.global/",
      technologies: ["HTML5", "CSS3"],
    },
    {
      title: "CryptoHub",
      link: "https://cryptohub.goit.global/",
      technologies: ["JavaScript"],
    },
    {
      title: "KidsLike",
      link: "https://kidslike.goit.global/",
      technologies: ["React.js", "Node.js"],
    },
  ],
  skills: {
    tech: [
      {
        title: "Main Stack",
        skills: ["HTML5", "CSS3", "JavaScript", "GIT", "React.js"],
      },
      {
        title: "Learning / Familiar",
        skills: ["TypeScript", "WebPack", "Node.js"],
      },
    ],
    soft: ["GTD", "Scrum", "Agile", "Teamwork"],
  },
  education: [
    {
      school: "Taras Shevchenko National University of Kyiv",
      program: "CyberSecurity",
      period: "September 2018 - June 2022",
      location: "Ukraine",
    },
  ],
  experience: [
    // Placeholder based on original HTML content about self-study
    {
      role: "Self-Study & Practice",
      company: "Self-Employed",
      period: "June 2018 - Present",
      location: "Kyiv, Ukraine",
      description: [
        "Read learn.javascript.ru",
        "Passed Flexbox Froggy completely",
        "Participated in city olympiads for creating sites",
      ],
    },
  ],
};

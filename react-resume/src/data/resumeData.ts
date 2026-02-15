export interface Project {
  title: string;
  link?: string;
  technologies?: string[];
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
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
    linkedin?: string;
    github?: string;
  };
  projects: Project[];
  skills: {
    backend: string[];
    frontend: string[];
    databases: string[];
    languages: string[];
    other: string[];
  };
  education: Education[];
  experience: Experience[];
  languages: string[];
  hobbies: string[];
}

export const resumeData: ResumeData = {
  name: "TYMOFII SHKANDIUK",
  title: "FULL STACK WEB DEVELOPER",
  location: "Halifax, NS",
  about:
    "Hey there! 👋 I'm a junior full-stack developer with nearly 5 years of web development experience, currently diving into React and TypeScript. I'm a quick learner, agile in adapting to new technologies, and eager to deepen my knowledge based on the needs of future projects. Whether working remotely or in the office, I'm passionate about coding and ready to tackle any challenge. Let's collaborate and create something awesome together!",
  contacts: {
    phone: "+1 (902) 580 6212",
    email: "timjobit@gmail.com",
    linkedin: "https://www.linkedin.com/in/97706971",
    github: "https://github.com/amiti-17",
  },
  experience: [
    {
      role: "Freelance full stack web developer",
      company: "Upwork",
      period: "March 2024 - Present",
      description: [
        "Completed various tasks for US clients, both of whom left satisfied. I helped connect existing projects to Firebase with small UI improvements.",
        "Additionally, I collaborated with a client who gathered developers from around the world to build a comprehensive music project, gaining valuable experience on a large-scale project with a team of professionals.",
      ],
    },
    {
      role: "Trainee full stack web developer",
      company: "sysGears",
      period: "February 2023 - November 2023",
      description: [
        "During my tenure, I actively contributed to the development and maintenance of diverse full-stack applications.",
        "Working collaboratively with seasoned developers, I gained hands-on experience with technologies such as Express.js, React-native, NestJS, GraphQL, and more.",
        "Engaging in code reviews and adhering to best practices, I refined my skills in providing and receiving constructive feedback.",
        "This experience not only honed my technical proficiency but also fostered a collaborative mindset essential for successful software development.",
      ],
    },
    {
      role: "Beginning as a Web Developer",
      company: "Self-Employment",
      period: "2016 - 2020",
      description: [
        "During my high school years, I discovered HTML and CSS. I shared this with my parents, and my dad jokingly said that if I created a website for his small business, he would buy me a new phone.",
        "Taking him seriously, I started learning in-depth and eventually created a simple site for his business.",
        "His colleagues also asked me to create websites for them, which generated some revenue. While these sites were very basic, some are still in use today.",
      ],
    },
  ],
  projects: [
    {
      title: "Weather web app - pet project",
      description:
        "I developed a weather app using a weather API to display information on both desktop and mobile platforms built with React Native. A standout feature of this project was real-time synchronization of added or removed cities across devices for users logged in under the same account, enhancing the user experience and convenience. Additionally, I implemented a database redundancy feature with MongoDB and PostgreSQL in Docker containers; if one database stopped responding, the app automatically switched to the other.",
    },
    {
      title: "Game searching web app",
      description:
        "I independently developed a web app for game searching, incorporating extensive filters to improve user experience. A key requirement was using only vanilla JavaScript, which I diligently implemented to create a responsive and efficient application.",
    },
    {
      title: "Calculator - pet project",
      description:
        "I led the development of three versions of a calculator project focused on simplifying function integration. Users could add display names and calculation functions in a JSON file for seamless support within the calculator. My responsibilities included developing integration and enhancing functionality.",
    },
    {
      title: "Early Projects",
      description: "I developed websites for family and friends' businesses early in my career. Although these were my initial projects, they remain online today. Over time, I have made design changes to enhance their functionality and aesthetics."
    }
  ],
  skills: {
    backend: ["Node.js", "NestJS", "Express.js", "REST", "GraphQL", "ApolloServer"],
    frontend: [
      "HTML",
      "CSS",
      "React",
      "React Native",
      "React Hooks",
      "NextJs",
      "Chakra UI",
      "Material UI",
      "TailWind",
      "Styled-Components",
      "Apollo Client",
    ],
    databases: ["Firebase", "MySql", "SQL", "PostgreSQL", "MongoDB"],
    languages: ["TypeScript", "JavaScript", "C++, python, php, java (Univ course)"],
    other: ["APIs", "Docker", "Webpack", "JWT , GIT"],
  },
  education: [
    {
      school: "Kyiv National University of Taras Shevchenko",
      degree: "Bachelor's Degree in Cyber Security",
      period: "2018 - 2022",
    },
    {
      school: "Technical Lyceum, Kyiv",
      degree: "High School",
      period: "2016 - 2018",
    },
  ],
  languages: ["English", "Ukrainian", "Russian"],
  hobbies: ["Bike", "Driving", "Auto/tech", "Music"],
};

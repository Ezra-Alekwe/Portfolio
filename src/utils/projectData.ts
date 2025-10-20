import { ProjectInfo } from "../interface/interface";

export const projects: ProjectInfo[] = [
  {
    image:
      "/images/munchy.png",
    title: "Food E-Commerce Website",
    subtitle:
      "A collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    skills: [  "HTML", "CSS","Javascript"],
    liveUrl: "https://ezra-alekwe.github.io/Food-Ecommerce/",
    githubUrl: "https://github.com/Ezra-Alekwe/Food-Ecommerce",
  },

  {
    image:
     "/images/reactQuiz.png",
    title: "React Quiz App",
    subtitle:
      "An analytics platform for social media managers with data visualization and automated reporting.",
       skills: [  "HTML", "CSS","Typescript"],
    liveUrl: "https://ezra-alekwe.github.io/React_Quiz/",
    githubUrl: "https://github.com/Ezra-Alekwe/React_Quiz",
  },

];



export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 90 }, // Strong experience building web apps
      { name: "TypeScript", level: 85 }, // Used with React projects
      { name: "Tailwind CSS", level: 90 }, // Regularly applied for responsive UI
      { name: "HTML & CSS", level: 95 }, // Core foundation, long-term use
      { name: "JavaScript (ES6+)", level: 85 }, // Strong async/await, Promises
      { name: "State Management (Zustand)", level: 75 }, // Project-level usage
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Yii Framework", level: 80 }, // Used for modeling, migrations, Active Record
      { name: "PHP", level: 80 }, // Practical experience from Yii + projects
      { name: "MySQL", level: 80 }, // Managed DB for applications
      { name: "API Integration", level: 75 }, // Async data fetching, KPI dashboards
      { name: "Java & Kotlin (Mobile)", level: 70 }, // Used for mobile app development
      { name: "C++ / C# / VBA", level: 60 }, // Knowledge-level, less recent focus
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 85 }, // Regular use in freelancing + Zilo
      { name: "Visual Studio Code", level: 90 }, // Daily driver
      { name: "Android Studio", level: 75 }, // Used for mobile development
      { name: "phpMyAdmin", level: 70 }, // For database management
      { name: "Figma", level: 65 }, // Translating designs to code
       { name: "Responsive Design", level: 85 },
    ],
  },
];

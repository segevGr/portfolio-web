import { SiJira, SiConfluence, SiTrello, SiAndroid } from "react-icons/si";

export const stackData = [
  {
    category: "FRONTEND",
    technologies: [
      { name: "React Native", icon: "devicon-react-original" },
      { name: "React", icon: "devicon-react-original" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Redux", icon: "devicon-redux-original" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "JQuery", icon: "devicon-jquery-plain" },
    ],
  },
  {
    category: "BACKEND",
    technologies: [
      { name: "Node.Js", icon: "devicon-nodejs-plain" },
      { name: "Express.Js", icon: "devicon-express-original" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
    ],
  },
  {
    category: "DATABASE",
    technologies: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "SQL", icon: "devicon-mysql-plain" },
      { name: "mySQL", icon: "devicon-mysql-plain" },
    ],
  },
  {
    category: "TOOLS",
    technologies: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Jira", icon: <SiJira size={50} color="#0052CC" /> },
      { name: "Confluence", icon: <SiConfluence size={50} color="#0052CC" /> },
      { name: "Trello", icon: <SiTrello size={50} color="#0079BF" /> },
      { name: "Android Studio", icon: <SiAndroid size={50} color="#3DDC84" /> },
    ],
  },
];

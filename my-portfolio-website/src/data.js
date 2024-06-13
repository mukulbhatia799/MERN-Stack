import { nanoid } from 'nanoid';
// import { FaHtml5, FaCss3Alt, FaBootstrap, FaNode, FaGithub, FaReact, FaGitAlt } from "react-icons/fa";
// import { SiMongodb, SiZod, SiJsonwebtokens, SiPostman } from "react-icons/si";
// import { RiJavascriptLine } from "react-icons/ri";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { PiFileCppBold } from "react-icons/pi";




// const skills = [
//   {
//     icon: PiFileCppBold,
//     title: 'CPP',
//   },
//   {
//     icon: FaHtml5,
//     title: 'HTML',
//   },
//   {
//     icon: FaCss3Alt,
//     title: 'CSS',
//   },
//   {
//     icon: RiJavascriptLine,
//     title: 'JavaScript',
//   },
//   {
//     icon: FaReact,
//     title: 'React.js',
//   },
//   {
//     icon: RiTailwindCssFill,
//     title: 'TailwindCSS',
//   },
//   {
//     icon: FaBootstrap,
//     title: 'Bootstrap',
//   },
//   {
//     icon: FaNode,
//     title: 'Node.js',
//   },
//   {
//     icon: 'expressjs',
//     title: 'Express.js',
//   },
//   {
//     icon: SiMongodb,
//     title: 'MongoDB',
//   },
//   {
//     icon: SiZod,
//     title: 'Zod',
//   },
//   {
//     icon: SiJsonwebtokens,
//     title: "JWT"
//   },
//   {
//     icon: SiPostman,
//     title: "Postman"
//   },
//   {
//     icon: FaGitAlt,
//     title: 'Git',
//   },
//   {
//     icon: FaGithub,
//     title: 'Github',
//   },
// ];



const skills = [
  {
    icon: 'cpp',
    title: 'CPP',
  },
  {
    icon: 'html',
    title: 'HTML',
  },
  {
    icon: 'css',
    title: 'CSS',
  },
  {
    icon: 'javascript',
    title: 'JavaScript',
  },
  {
    icon: 'react',
    title: 'React.js',
  },
  {
    icon: 'tailwindcss',
    title: 'TailwindCSS',
  },
  {
    icon: 'bottstrap',
    title: 'Bootstrap',
  },
  {
    icon: 'nodejs',
    title: 'Node.js',
  },
  {
    icon: 'expressjs',
    title: 'Express.js',
  },
  {
    icon: 'mongodb',
    title: 'MongoDB',
  },
  {
    icon: 'zod',
    title: 'Zod',
  },
  {
    icon: 'jsonwebtoken',
    title: "JWT"
  },
  {
    icon: 'postman',
    title: "Postman"
  },
  {
    icon: 'git',
    title: 'Git',
  },
  {
    icon: 'github',
    title: 'Github',
  },
];



const projects = [
  {
    id: nanoid(),
    title: 'Postline',
    img: '/imgs/projects/postline.webp',
    desc: 'Social Media App where users can interact with each other through posts ',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/mukulbhatia799/MERN-Stack',
    live: 'https://github.com/mukulbhatia799/MERN-Stack',
  },
  {
    id: nanoid(),
    title: 'CodeTales',
    img: '/imgs/projects/codetales.webp',
    desc: 'A blogging Web Application where one can publish and read blogs 📖',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/mukulbhatia799/MERN-Stack',
    live: 'https://github.com/mukulbhatia799/MERN-Stack',
  },
  {
    id: nanoid(),
    title: 'FoodHunt',
    img: '/imgs/projects/foodhunt.webp',
    desc: "A food delivery App built using Reactjs and Powered by Swiggy's API",
    technologies: ['React.js', 'TailwindCSS', 'Redux'],
    github: 'https://github.com/mukulbhatia799/MERN-Stack',
    live: 'https://github.com/mukulbhatia799/MERN-Stack',
  },
  {
    id: nanoid(),
    title: 'Codwiz',
    img: '/imgs/projects/codwiz.webp',
    desc: 'An interactive quiz application to test your knowledge of programming languages.',
    technologies: ['React.js', 'TypeScript', 'MantineUI'],
    github: 'https://github.com/mukulbhatia799/MERN-Stack',
    live: 'https://github.com/mukulbhatia799/MERN-Stack',
  },
  {
    id: nanoid(),
    title: 'Notes App',
    img: '/imgs/projects/notes.webp',
    desc: 'A notes app where one can add quick notes on the go. Data is saved locally.',
    technologies: ['React.js', 'Express', 'MongoDB'],
    github: 'https://github.com/mukulbhatia799/MERN-Stack',
    live: 'https://github.com/mukulbhatia799/MERN-Stack',
  },
  {
    id: nanoid(),
    title: 'Weather App',
    img: '/imgs/projects/weather.webp',
    desc: 'A weather app that tells weather details based on search query (city, state, etc)',
    technologies: ['React.js', 'flutter', 'Node.js'],
    github: 'https://github.com/mukulbhatia799/MERN-Stack',
    live: 'https://github.com/mukulbhatia799/MERN-Stack',
  },
  {
    id: nanoid(),
    title: 'Triangle Quiz',
    img: '/imgs/projects/triangle.webp',
    desc: 'How much  do  you know  about triangles 🔺? Test your skills.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mukulbhatia799/MERN-Stack',
    live: 'https://github.com/mukulbhatia799/MERN-Stack',
  },
];

export const data = { projects, skills };

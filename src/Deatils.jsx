// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import Springboot from "./assets/tech_logo/springboot.png";
import RESTfulAPI from "./assets/tech_logo/REST API.png";

// Experience Section Logo's
import shoppersstop from "./assets/company_logo/SS.jpg";
import codecraft from "./assets/company_logo/code craft.jfif";

// Education Section Logo's
import outr from "./assets/education_logo/OUTR.png";
import fm from "./assets/education_logo/FM.png";
import bse from "./assets/education_logo/BSE.png";

// Project Section Logo's
import Bikerental from "./assets/work_logo/Bike rental.png";
import Liveweather from "./assets/work_logo/live weather.png";
import frontendui from "./assets/work_logo/Frontend ui.png";
import nextron from "./assets/work_logo/Nextron.png";
import imageremove from "./assets/work_logo/img remover.png";
import Todolist from "./assets/work_logo/Todo list.png";
import { SiSpringboot } from "react-icons/si";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React.JS", logo: reactjsLogo },
      { name: "Angular.Js", logo: angularLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "TailwindCSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: Springboot },
      { name: "Node.JS", logo: nodejsLogo },
      { name: "Express.JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "RESTful API", logo: RESTfulAPI },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: codecraft,
    role: "Intern (Virtual)",
    company: "CodeCraft Technologies",
    date: "January 2025 - February 2025",
    desc: "Built multiple fully responsive and user-centric web applications during my internship using React.js, Tailwind CSS, and RESTful APIs, including a Live Weather App with real-time weather data integration via OpenWeatherMap API, and a Bike Rental Website featuring a seamless booking system and modern UI animations using AOS. Implemented secure user authentication with protected routes, responsive layouts, dark mode, and mobile-optimized navigation. Emphasized component-based architecture, React Hooks for state management, and best practices in UI/UX design, asynchronous programming, and error handling for a smooth and engaging user experience.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TailwindCss",
      "Node JS",
      "Bootstrap",
      "MySql",
      "RESTful API",
      "Express Js",
      "Ui/Ux",
    ],
  },
  {
    id: 1,
    img: shoppersstop,
    role: "SAP Intern",
    company: "Shopper Stop Ltd.",
    date: "March 2024 - May 2025",
    desc: "Gaining practical exposure to SAP S/4HANA and SAP Fiori in an Industrial environment. Handled inventory control, ERP management, stock receiving, and goods inward processes using barcode scanners and SAP MM transactions. Managed databases of both stock and employees through SAP. Learned and applied various SAP T-Codes used in industrial and manufacturing workflows, including the Goods Receipt process and stock updates, while developing strong skills in team collaboration and system accuracy.",
    skills: [
      "SAP S/4 HANA",
      "SAP Fiori",
      "SAP T-codes",
      "SAP MM",
      "SAP ERP System",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: outr,
    school: "Odisha University Of Technology And Research, Bhuabaneswar",
    date: "Sept 2020 - July 2024",
    grade: "7.7 CGPA",
    desc: "I hold a Bachelor of Technology (B.Tech) degree in Electrical Engineering from Odisha University of Technology and Research (OUTR), Bhubaneswar. Throughout my academic journey, I explored both core engineering subjects and modern interdisciplinary areas. During my B.Tech, I gradually developed an interest in technology and software development, which led me to learn web development and programming alongside my coursework .",
    degree: "Bachelor In Technology- B.Tech",
  },
  {
    id: 1,
    img: fm,
    school: "Fakir Mohan Higher Secondary Scool, Balasore",
    date: "Sept 2018 - Aug 2020",
    grade: "50%",
    desc: "I completed my 12th grade in the Science stream, where I developed a strong interest in mathematics, physics, and problem-solving.",
    degree: "ISC - 12th(CHSE)",
  },
  {
    id: 2,
    img: bse,
    school: "M.B Nodal High Scool, Gopalpur",
    date: "Apr 2016 - March 2018",
    grade: "70.23%",
    desc: "I began my academic journey in an Odia medium school, where I completed my Class 10th with top rank in my class. Studying in my native language helped me build a strong foundation in core subjects like mathematics and science.",
    degree: "BSE- 10th",
  },
];

export const projects = [
  {
    id: 0,
    title: "Bike Rental App",
    description:
      "Developed a responsive Bike Rental Website using React.js and Tailwind CSS, incorporating a seamless booking system, interactive UI animations with AOS, and a mobile-friendly navigation menu. Implemented dark mode functionality, optimized user engagement through well-structured sections for testimonials, services, and pricing, and ensured a modern, intuitive user experience.",
    image: Bikerental,
    tags: ["HTML", "CSS","Tailwindcss", "JavaScript", "React JS"],
    github:
      "https://github.com/abhijeet-malik/quick-rental",
    webapp: "https://quick-rental.vercel.app/",
  },
  {
    id: 1,
    title: "Frontend Dashboard UI",
    description:
      "Built a dynamic and responsive product dashboard using React.js and Tailwind CSS as part of Segwise’s frontend intern assessment. The challenge involved turning a Figma design into a pixel-perfect UI while adding complex interactive features like- Filtering and sorting data, A custom data table with search, A row preview component similar to LinkedIn chat popups, Modal view on row click for detailed insights.This project tested my UI/UX implementation skills and React logic under tight deadlines (48 hours), simulating real-world product scenarios.",
    image: frontendui,
    tags: [
      "React JS",
      "TailwindCSS", 
      "Figma",
      "ui/ux",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/abhijeet-malik/segwise-assignment",
    webapp: "https://segwise-assignment-sigma.vercel.app/",
  },
  {
    id: 2,
    title: "Live Weather App",
    description:
      "Developed a fully responsive Weather App using React.js, integrating the OpenWeatherMap API to fetch and display real-time weather data based on city input or user location. Key features include temperature conversion, humidity, visibility, wind direction, and dynamic icons for sunrise/sunset and weather conditions.",
    image: Liveweather,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind CSS", "UI/UX", "RESTful APIs"],
    github: "https://github.com/abhijeet-malik/weather-app",
    webapp: "https://weather-app-kappa-lime-95.vercel.app/",
  },
  {
    id: 5,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version.",
    image: imageremove,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/abhijeet-malik/image.remove",
    webapp: "https://image-remove.vercel.app/",
  },

  {
    id: 3,
    title: "Todolist",
    description:
      "Todo-List-App helps you keep a track of your Day to Day Activities.",
    image: Todolist,
    tags: ["HTML5", "CSS3", "JavaScript", "Node.Js", "Responsive Web Design"],
    github: "https://github.com/abhijeet-malik/To-Do-List",
    webapp: "https://to-do-list-lilac-iota-83.vercel.app/",
  },
  {
    id: 4,
    title: "NexTron E-commerce App",
    description:
      "Developed a fully functional eCommerce website using React.js, Next.js, and JavaScript, integrating a dynamic search feature and real-time data fetching through APIs. Designed a responsive and visually appealing UI using Tailwind CSS, Material-UI, and other modern UI frameworks to enhance user experience. Focused on component reusability, performance optimization, and seamless user interactions across all devices.",
    image: nextron,
    tags: ["React.JS", "API", "Search Feature", "Tailwindcss", "Material‑UI", "UI frameworks", "Next.js", "Javascript"],
    github: "https://github.com/abhijeet-malik/NexTron",
    webapp: "https://nex-tron.netlify.app/",
  },
  
];

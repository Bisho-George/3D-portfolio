import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "e-commerce website using angular",
    description:
      "Web-based platform that allows users to search and buy products",
    tags: [
      {
        name: "angular",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
      },
      {
        name: "angular MaterialUI",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-green-700",
      },
      {
        name: "tailwind",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Bisho-George/ecommerce-website",
  },
  {
    name: "Weather Journal api",
    description:
      "Web application that enables you to know the weather in any country this application uses openweather api",
    tags: [
      {
        name: "Javascript",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
      },
      {
        name: "Css",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-green-700",
      },
      {
        name: "Html",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/bisho515/weather-journal-website"
  },
  {
    name: "Egybest api",
    description:
      "Skills utilized in building this API include Node.js,Express.js, MongoDB, Mongoose, RESTful APIs, CRUD operations, and asynchronous programming with async/await.",
    tags: [
      {
        name: "Nodejs",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-green-700",
      },
      {
        name: "MongoDB",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
      },
      {
        name: "Express js",
        color: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/Bisho-George/egybest",
  },
];

export { services, technologies, testimonials, projects };

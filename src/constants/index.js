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
  JP,
  docker,
  starbucks,
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
    id: "tech",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Development: HTML, CSS, JavaScript, ReactJs, Tailwind CSS, Bootstrap",
    icon: web,
  },
  {
    title: "Backend Development: Java, Springboot, Spring Data, Rest APIs, Microservices, Node.js ",
    icon: mobile,
  },
  {
    title: "DataBases and Cloud : MySQL, PostgeSQL, MongoDB, AWS",
    icon: backend,
  },
  {
    title: "Miscellaneous: Selenium, Junit, GitHub, CI/CD, Docker, Kubernetes, Jira, OAuth2",
    icon: creator,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "MetLife",
    icon: JP,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Accelerated API response times by 30% through optimized backend development using Java, Spring Boot, and Spring MVC, enhancing scheduling systems with modular service design and secure data handling.",
      "Engineered scalable microservices with Apache Kafka and Redis for asynchronous processing and low-latency caching, improving system throughput and reliability across distributed cloud environments.",
      "Built dynamic React.js user interfaces with reusable components, Redux-based state management, and virtual DOM optimization, enhancing frontend performance and user experience.",
      "Improved observability of enterprise microservices by implementing centralized logging (ELK Stack) and real-time dashboards with Grafana, reducing issue resolution time.",
      "Participated in Agile ceremonies, conducted peer code reviews, and collaborated across cross-functional teams to align feature delivery with architectural standards."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Infosys",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April 2021 - July 2023",
    points: [
      "Developed and maintained enterprise-grade microservices using Java, Spring Boot, and J2EE, integrating with both RESTful and legacy SOAP APIs for critical business workflows.",
      "Designed cloud-first architectures using AWS services like EC2, ELB, RDS, and S3, ensuring system uptime, fault tolerance, and seamless scalability.",
      "Built interactive React.js frontends with responsive design, secure API integration, and cross-browser compatibility, enhancing user experience across platforms.",
      "Integrated MongoDB, MySQL, and PostgreSQL to create hybrid data models for high-performance querying and transactional consistency.",
      "Implemented robust automated testing pipelines using JUnit, Mockito, and Cypress within CI/CD workflows on GitLab and Jenkins, ensuring high code quality and rapid release cycles.",
      "Collaborated with product owners and QA teams in Agile sprints, leading grooming sessions and contributing to sprint planning, estimation, and retrospective meetings."
    ],
  },

];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };

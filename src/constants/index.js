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
    zyxan,
    gssoc,
    ssoc,
    java,
    postman,
    mui,
    moodfood,
    webcrawler,
    todoapp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Frontend Developer",
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
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Material UI",
      icon: mui,
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
      name: "git",
      icon: git,
    },
    {
      name: "Postman",
      icon: postman,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Zyxan Technologies",
      icon: zyxan,
      iconBg: "#383E56",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Worked on several projects, developed and implemented a streamlined solution for managing user test cases, eliminating the need for proprietary tools like HP ALM.",
        "Throughout the duration of my internship program, I have become familiar with the AGILE development methodology, gaining familiarity and expertise in its principles, practices, and implementation strategies.",
        "I have Implemented responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "GSSOC & SSOC",
      icon: gssoc,
      iconBg: "#E6DEDD",
      date: "June 2023 - Aug 2023",
      points: [
        "Made significant contributions to various repositories by writing code, which included tasks such as identifying and resolving bugs as well as implementing new features.",
        "I have worked alongside talented contributors, industry experts, and mentors which has proven to be an invaluable and enriching experience.",
        "My contributions have been recognized by the project maintainers, who have praised the clarity and efficiency of the code I've submitted.",
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
      name: "Mood Based Food Recommendation",
      description:
        "An ML model that recommends food to users based on their current mood. Implemented using KNN algorithm and suggests the restaurants in the preferred city based on rating.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: moodfood,
      source_code_link: "https://github.com/saikiranreddy201/Mood-Based-Restaurant-Recommendation",
    },
    {
      name: "Web Crawler",
      description:
        "This NodeJs project retrieves and extracts information from web pages making HTTP requests including all the PHP files and HTML files. The web pages having the robots.txt files are secured and these applications cannot be extracted.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: webcrawler,
      source_code_link: "https://github.com/saikiranreddy201/web-crawler",
    },
    {
      name: "FullStack To-Do app",
      description:
        "A FullStack To-Do app using MERN stack, where users can interact with a UI and stores their tasks and important dates in MongoDB. Bootstrap is used for styling the UserInterface. User can update and save their To-Do's in the UI itself",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Expressjs",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: todoapp,
      source_code_link: "https://github.com/saikiranreddy201/Todo-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
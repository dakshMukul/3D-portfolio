import {
    // mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    mysql,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    moviesapp,
    CheckWeather,
    minions,
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
      id:"resume",
      title:"Resume"
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "Full Stack  Developer",
      icon: web,
    }
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
      name: "Mysql",
      icon: mysql,
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
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
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
      name: "Movies On Tip",
      description:
        "The project aims to create a website where we maintain the latest films, Upcoming films, Top rated movies along with their details and manage user favorites.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Axios APIs",
          color: "green-text-gradient",
        },
        {
          name: "React Bootstarp",
          color: "pink-text-gradient",
        },
      ],
      image: moviesapp,
      source_code_link: "https://github.com/dakshMukul/MoviesOnTip",
    },
    {
      name: "Weather App",
      description:
        "This weather app will show the weather information for a specific city. User should be able to get the weather information for any valid cities",
      tags: [
        {
          name: "Vanilla js",
          color: "blue-text-gradient",
        },
        {
          name: "Fetch API",
          color: "green-text-gradient",
        },
        {
          name: "DOM Manipulation",
          color: "pink-text-gradient",
        },
      ],
      image: CheckWeather,
      source_code_link: "https://dakshmukul.github.io/CheckWeather/",
    },
    {
      name: "Minions Translator",
      description:
        "Convert from English to Minion speak. This language is spoken by the minions in Despicable Me. The language is actually lots of languages. Yi kai yai yai bananna! Minion is a registered trademark of Universal Studios.",
      tags: [
        {
          name: "Vanilla js",
          color: "blue-text-gradient",
        },
        {
          name: "Fetch API",
          color: "green-text-gradient",
        },
      ],
      image: minions,
      source_code_link: "https://github.com/dakshMukul/talk_banana",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
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
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  cpp,
  docker,
  meta,
  graphity,
  venq,
  arcon,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  linux,
  python,
  bash
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Linux Enthusiast",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },

  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Graphity",
    icon: graphity,
    iconBg: "#fffEf6",
    date: "Feb 2023 - March 2023",
    points: [
      "Collaborated with a team of interns to recreate Graphity's website pages according to new designs using Nextjs and Tailwind CSS.",
      "Led the team and managed the work of two other interns.",
      "Gained valuable experience working in a team and developing skills in project management and coordination.",
      "Demonstrated proficiency in using Nextjs and Tailwind CSS to create visually appealing and responsive web pages.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "VENQ",
    icon: venq,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jun 2023",
    points: [
      "Collaborated with the external SabPaisa team to integrate their payment gateway into Fullcover, enabling secure and efficient online ticket purchases.",
      "Built and maintained the backend of Fullcover using Node.js and Express.js, with MongoDB for data storage and NextAuth.js for user authentication and session handling.",
      "Ensured robust API architecture and payment workflows that supported the complete club ticketing lifecycle.",
      "Developed the frontend for PostPal, a web platform for hiring influencers, using Next.js and Tailwind CSS for fast, responsive, and modern UI design.",
      "Focused on delivering a seamless and accessible user experience in PostPal for both brands and influencers, with clean design and optimized performance.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ARCON",
    icon: arcon,
    iconBg: "#383E56",
    date: "Jul 2024 - Present",
    points: [
      "Awarded \"Best in Action\" at the company townhall for resolving long-standing Ubuntu and SUSE Linux support issues impacting key clients.",
      "Established standardized Git-based workflows and release validation practices for thick clients, significantly improving release stability and reducing deployment errors.",
      "Spearheaded the migration of a 7-year-old legacy C++ codebase (Screengrab & ARUH) to Python, enhancing maintainability, flexibility, and long-term scalability.",
      "Automated the packaging pipeline across multiple Linux distributions (Ubuntu 20/22/24, SUSE 15, Rocky 9.2–9.5) by developing custom shell scripts, reducing human error and saving engineering hours.",
      "Built and maintained modular shell scripts to streamline and standardize Linux build processes, accelerating release timelines and boosting developer productivity.",
      "Currently owning and modernizing internal CLI tooling (pycli-pam and pycli-ci) to support future infrastructure growth.",
      "Winner of ARCON's internal coding hackathon, recognized for speed, code quality, and innovative problem-solving under pressure.",
    ]
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Filepilot",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyqt5",
        color: "green-text-gradient",
      },
      {
        name: "paramiko",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Kevin11-code/filepilot",
  },
  {
    name: "ChatAI",
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
    name: "DecentSupply.",
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
  {
    name: "Validize",
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
  {
    name: "ExpenseTracker",
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
  {
    name: "DecentSupply.",
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

export { services, technologies, experiences, testimonials, projects };

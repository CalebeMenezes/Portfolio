import {
  pythonshild,
  backend,
  learning,
  cybershild,
  javascript,
  hacker,
  cyber,
  windows,
  python,
  reactjs,
  tailwind,
  nodejs,
  git,
  PortScanner,
  SimDDos,
  comingSoon,
  threejs,
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
    title: "Cybersecurity",
    icon: cybershild,
  },
  {
    title: "Python",
    icon: pythonshild,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ready to learn",
    icon: learning,
  },
];

const technologies = [
  {
    name: "cyber-security",
    icon: cyber,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "hacker",
    icon: hacker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "windows",
    icon: windows,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  
  
  
 
];

const experiences = [
  {
    title: "SOON",
    company_name: "",
    icon: python,
    iconBg: "#383E56",
    date: "",
    points: [
      
    ],
  },
  {
    title: "SOON",
    company_name: "",
    icon: python,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      
    ],
  },
  {
    title: "SOON",
    company_name: "",
    icon: python,
    iconBg: "#383E56",
    date: "",
    points: [
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "PortScannerPython",
    description:
      "An advanced port scanning script written in Python designed to identify open, closed ports and services on an IP address or domain. The project includes support for multithreading, Proxy, Tor, graph generation and PDF reports.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: PortScanner,
    source_code_link: "https://github.com/CalebeMenezes/PortScannerPython",
  },
  {
    name: "DDoS Attack Simulator",
    description:
      "A Python script that simulates a DDoS (Distributed Denial of Service) attack for educational purposes only. The project was developed for professional cybersecurity study to understand how DDoS attacks work, without causing real damage.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: SimDDos,
    source_code_link: "https://github.com/CalebeMenezes/SimDDos",
  },
  {
    name: "SOON",
    description:
      "coming soon",
    tags: [
      {
        name: "coming soon",
        color: "blue-text-gradient",
      },
      {
        name: "coming soon",
        color: "green-text-gradient",
      },
      {
        name: "coming soon",
        color: "pink-text-gradient",
      },
    ],
    image: comingSoon,
    source_code_link: "https://github.com/CalebeMenezes",
  },
];

export { services, technologies, experiences, testimonials, projects };
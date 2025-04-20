import Godan from "@/public/images/Projects/godan.png";
import Spaceet from "@/public/images/Projects/spaceet.png";
import Aview from "@/public/images/Projects/aview.png";
import Cova from "@/public/images/Projects/cova.png";
import DLHS from "@/public/images/Projects/d-lhs.png";
import SaySwitch from "@/public/images/Projects/sayswitch.png";

import Stack from "@/public/images/Dock/stack.svg";
import Projects from "@/public/images/Dock/projects.svg";
import LinkedIn from "@/public/images/Dock/linkedIn.svg";
import Home from "@/public/images/Dock/home.svg";
import Mail from "@/public/images/Dock/mail.svg";
import GitHub from "@/public/images/Dock/github-dark.png";

export const data = [
  {
    heading:
      "The Secondary Trading Platform is a financial ecosystem that enables investors to buy and sell fractionalized recurring revenue contracts, working alongside a primary lending platform to create a complete marketplace for invoice-based investments.",
    img: Aview,
    skills: "Django • REST • Signzy • Finance Payout • PostgreSQL • Docker",
    link: "https://github.com/kirtanlab/naharom_backend",
  },
  {
    heading:
      "The Restaurant Caching API efficiently manages high-volume data requests for restaurant systems through a robust caching implementation in Spring Boot, optimizing performance for complex data relationships while providing multiple cache provider options for customized deployment.",
    img: Cova,
    skills: "Spring Boot • REST • Neo4j • Caffeine • Redis • JUnit • Docker",
    link: "https://github.com/kirtanlab/Graph_Caching",
  },
  {
    heading:
      "Analyzes resumes and job descriptions, using specialized agents to extract key information and generate professionally formatted LaTeX documents that highlight relevant skills and experience for specific job applications.",
    img: SaySwitch,
    skills: "Python • Streamlit • LMM • Parsing",
    link: "https://github.com/kirtanlab/resume_tailoring_system",
  },
  {
    heading:
      "The Asset Management System streamlines organizational resource tracking with comprehensive features for request workflows, employee management, and asset classification, all protected by robust JWT authentication and role-based access controls.",
    img: DLHS,
    skills: "Spring Boot • REST • PostgreSQL • JWT",
    link: "https://github.com/kirtanlab/elecon_rnd_backend",
  },
  {
    heading:
      "Distributed File System is a project designed to manage and distribute files across multiple servers, providing a seamless user experience. The system consists of three different servers (smain.c, spdf.c, and stext.c) and one client program",
    img: Spaceet,
    skills: "",
    link: "https://github.com/kirtanlab/ASP_Project",
  },
  {
    heading:
      "ConnectWithMe is a microservices-based platform that enables users to create profiles, share projects, and connect with others based on skills, education, and interests. The platform implements clean architecture principles with a hexagonal approach, focusing on domain-driven design and clear separation of concerns.",
    img: Godan,
    skills: "SpringBoot • REST • Kafka • Eureka • PostgreSQL • Docker • Zookeeper",
    link: "https://github.com/kirtanlab/ConnectWithMeMicroservice",
  },
  {
    heading:
      "These Java TCP socket programming projects demonstrate fundamental client-server communication patterns using NetBeans IDE. From basic date retrieval and chat functionality to more complex operations like file transfers and object serialization, these examples provide a practical foundation for understanding network programming with Java Sockets.",
    img: Godan,
    skills: "",
    link: "https://github.com/kirtanlab/Socket_JAVA_Practice",
  },
  {
    heading:
      "This project is a production-grade, full-stack clone of Airbnb, designed to demonstrate deep understanding of modern web and mobile application development, scalable backend architecture, and real-time systems. The application supports both web and mobile clients with a shared codebase for business logic, validation, and API integration.",
    img: Godan,
    skills: "",
    link: "https://github.com/kirtanlab/Find_Rental",
  },
  {
    heading:
      "RainbowText is a minimal Flask + React web application designed to demonstrate a fully automated containerized deployment pipeline using Docker Compose and AWS ECS Fargate. While the app itself renders a simple rainbow-colored animated text page, the focus is on teaching infrastructure-as-code, CI/CD, and cloud-native deployment workflows.",
    img: Godan,
    skills: "",
    link: "https://github.com/kirtanlab/AutoDeply_AWS",
  },
];

export const Dark = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5C7.9998 6.39064 8.41381 7.74983 9.18923 8.90421C9.96465 10.0586 11.0663 10.9559 12.3538 11.4816C13.6412 12.0073 15.0561 12.1376 16.4179 11.8559C17.7797 11.5742 19.0268 10.8933 20 9.9V10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0H10.1C9.43404 0.651125 8.90514 1.42896 8.54448 2.28768C8.18382 3.1464 7.99869 4.06862 8 5ZM2 10C1.99927 11.785 2.59553 13.5189 3.69389 14.926C4.79226 16.333 6.32963 17.3323 8.06141 17.7648C9.79319 18.1974 11.6199 18.0383 13.2508 17.313C14.8818 16.5876 16.2233 15.3377 17.062 13.762C15.5694 14.1136 14.0118 14.0781 12.5368 13.6587C11.0619 13.2394 9.7185 12.4501 8.63421 11.3658C7.54992 10.2815 6.76065 8.93814 6.34128 7.46318C5.92192 5.98821 5.88636 4.43056 6.238 2.938C4.95758 3.62014 3.88678 4.63766 3.14026 5.88164C2.39373 7.12562 1.99958 8.54921 2 10Z"
      fill="white"
    />
  </svg>
);

export const dockLinks = [
  {
    to: "/",
    text: "Home",
    image: Home,
  },
  {
    to: "/projects",
    text: "Projects",
    image: Projects,
  },
  {
    to: "/stacks",
    text: "Stacks",
    image: Stack,
  },
  {
    to: "https://github.com/kirtanlab/",
    text: "GitHub",
    external: true,
    image: GitHub,
  },
  {
    to: "https://www.linkedin.com/in/kirtan-prajapati-6203a21b8/",
    text: "LinkedIn",
    external: true,
    image: LinkedIn,
  },
  // {
  //   to: "https://twitter.com/vicopem",
  //   text: "Twitter",
  //   external: true,
  //   image: Twitter,
  // },
  {
    to: "mailto:kirtanprajapati0804@gmail.com?subject=Hi%Victor&body=I%20saw%20your%20portfolio%20and%20",
    text: "Email",
    external: true,
    image: Mail,
  },
];

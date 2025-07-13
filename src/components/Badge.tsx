import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaGithub,
  FaPhp,
  FaJava,
  FaWindows,
  FaAndroid,
  FaPython,
  FaWordpress,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiAngular,
  SiSass,
  SiBootstrap,
  SiMysql,
  SiMarkdown,
  SiNpm,
  SiGitlab,
  SiPostman,
  SiDbeaver,
  SiGoogle,
  SiEjs,
  SiDotnet,
  SiIonic,
  SiGoogleplay,
  SiSwagger,
  SiBosch,
  SiAutocad,
  SiSketchup,
  SiAdobephotoshop,
  SiCypress,
  SiPrisma,
  SiDocker,
} from "react-icons/si";
import {
  BiNetworkChart,
  BiData,
  BiBug,
  BiUserCheck,
  BiBuildings,
  BiPalette,
  BiBrush,
  BiCog,
  BiCodeAlt,
  BiServer,
  BiLayer,
  BiCube,
  BiImage,
  BiDesktop,
  BiSpeaker,
} from "react-icons/bi";

const BadgeContainer = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem 0.7rem;
  background-color: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0.1rem;
  cursor: default;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => `${theme.primary}30`};

  &:hover {
    background-color: ${({ theme }) => `${theme.primary}30`};
    border-color: ${({ theme }) => theme.primary};
  }

  svg {
    font-size: 0.9rem !important;
  }
`;

// Mapeo de tecnologías a iconos
const TechnologyIcons: { [key: string]: React.ReactNode } = {
  // Frontend
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  JavaScript: <FaJs />,
  "Vue.js": <SiVuedotjs />,
  Angular: <SiAngular />,
  CSS3: <FaCss3Alt />,
  Sass: <SiSass />,
  SCSS: <SiSass />,
  Bootstrap: <SiBootstrap />,
  HTML5: <FaHtml5 />,
  Redux: <SiRedux />,
  "Redux.js": <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,
  "Angular Material": <SiAngular />,
  "Next.js": <SiTypescript />, // Using TypeScript icon as placeholder

  // Backend
  "Node.js": <FaNodeJs />,
  MySQL: <SiMysql />,
  "Express.js": <SiExpress />,
  Express: <SiExpress />,
  PHP: <FaPhp />,
  Java: <FaJava />,
  Python: <FaPython />,
  ".NET": <SiDotnet />,
  "Visual Basic": <BiCodeAlt />,
  EJS: <SiEjs />,
  JWT: <BiCodeAlt />,
  Swagger: <SiSwagger />,
  Prisma: <SiPrisma />,

  // Mobile
  Ionic: <SiIonic />,
  Cordova: <BiCodeAlt />,
  Android: <FaAndroid />,
  "Play Store": <SiGoogleplay />,

  // Cloud & DevOps
  AWS: <FaAws />,
  "AWS Athena": <FaAws />,
  "AWS S3": <FaAws />,
  "AWS Lambda": <FaAws />,
  DynamoDB: <FaAws />,
  CodeCommit: <BiCodeAlt />,
  Amplify: <BiCodeAlt />,
  CloudWatch: <BiCodeAlt />,
  Docker: <SiDocker />,

  // Tools & Platforms
  GitHub: <FaGithub />,
  Git: <FaGitAlt />,
  GitLab: <SiGitlab />,
  npm: <SiNpm />,
  Postman: <SiPostman />,
  DBeaver: <SiDbeaver />,
  "VS Code": <BiCodeAlt />,
  Windows: <FaWindows />,
  WordPress: <FaWordpress />,
  PowerBI: <BiData />,
  Cypress: <SiCypress />,

  // Methodologies & Concepts
  Scrum: <BiBuildings />,
  Kanban: <BiBuildings />,
  "Project Management": <BiBuildings />,
  Leadership: <BiUserCheck />,
  Automation: <BiCog />,
  QA: <BiBug />,
  Debugging: <BiBug />,
  Depuración: <BiBug />,

  // Design & UX
  UX: <BiPalette />,
  UI: <BiBrush />,
  "UX/UI": <BiPalette />,
  Mockups: <BiImage />,
  Figma: <FaFigma />,

  // APIs & Data
  GoogleAPI: <SiGoogle />,
  "Google API": <SiGoogle />,
  APIRest: <BiNetworkChart />,
  "API REST": <BiNetworkChart />,
  "API-REST": <BiNetworkChart />,
  Database: <FaDatabase />,
  "Data Lake": <BiData />,
  "Data Analysis": <BiData />,
  "Análisis de Datos": <BiData />,

  // Audio & Engineering
  "Ease Acoustics": <BiSpeaker />,
  AutoCAD: <SiAutocad />,
  CUE: <BiCodeAlt />,
  Symetrix: <BiServer />,
  UDP: <BiNetworkChart />,
  "TCP/IP": <BiNetworkChart />,
  "RS 232": <BiNetworkChart />,
  Dante: <BiNetworkChart />,

  // Office & 3D
  Office: <BiDesktop />,
  Lumion: <BiCube />,
  SketchUp: <SiSketchup />,
  Vray: <BiCube />,
  Insul: <BiLayer />,
  Photoshop: <SiAdobephotoshop />,
  "3D modeling": <BiCube />,
  Rendering: <BiImage />,

  // Version Control & CI/CD
  "Version Control": <FaGitAlt />,
  "Control de Versiones": <FaGitAlt />,
  "CI/CD": <SiDocker />,

  // Company specific
  Bosch: <SiBosch />,

  // Markdown
  Markdown: <SiMarkdown />,
};

interface BadgeProps {
  technology: string;
}

const Badge: React.FC<BadgeProps> = ({ technology }) => {
  const icon = TechnologyIcons[technology];

  return (
    <BadgeContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {icon || <BiCodeAlt />}
      {technology}
    </BadgeContainer>
  );
};

export default Badge;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Badge from "../components/Badge";
import logoPetshop from "../assets/img/logoPetshop.jpg";
import logoExpenseTracker from "../assets/img/logoExpenseTracker.jpg";
import logoLibrary from "../assets/img/logoLibreria.jpg";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  description_en: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &.primary {
    background-color: ${({ theme }) => theme.primary};
    color: white;

    &:hover {
      background-color: ${({ theme }) => theme.secondary};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};

    &:hover {
      background-color: ${({ theme }) => `${theme.primary}15`};
    }
  }
`;

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();

  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: "Petshop",
      description:
        "E-commerce platform built using React, HTML, SASS, EJS, and MySQL. It includes features such as user authentication, profile management, shopping cart, administration, product search, and purchase history tracking.",
      description_en:
        "E-commerce platform built using React, HTML, SASS, EJS, and MySQL. It includes features such as user authentication, profile management, shopping cart, administration, product search, and purchase history tracking.",
      image: logoPetshop,
      techStack: [
        "React",
        "JavaScript",
        "EJS",
        "HTML5",
        "Node.js",
        "MySQL",
        "CSS3",
        "Express.js",
        "APIRest",
        "Github",
        "Scrum",
        "PHP",
      ],
      githubUrl: "https://github.com/andrezmazo/petshop",
      demoUrl: undefined,
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "A personal finance tracking application built with React and Node.js using TypeScript, allowing users to manage and categorize their expenses, track budgets, and visualize their spending habits.",
      description_en:
        "A personal finance tracking application built with React and Node.js using TypeScript, allowing users to manage and categorize their expenses, track budgets, and visualize their spending habits.",
      image: logoExpenseTracker,
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "HTML5",
        "Bootstrap",
        "CSS3",
        "Express.js",
        "Github",
        "APIRest",
      ],
      githubUrl: "https://github.com/andrezmazo/expense-tracker",
      demoUrl: undefined,
    },
    {
      id: 3,
      title: "Library Inventory Management",
      description:
        "A web application designed for library or bookstore inventory management. The application offers registered users a secure login and provides functionalities to create, edit, and delete book records, as well as to view product details. The project includes both frontend and backend solutions, ensuring secure authentication and effective product administration.",
      description_en:
        "A web application designed for library or bookstore inventory management. The application offers registered users a secure login and provides functionalities to create, edit, and delete book records, as well as to view product details. The project includes both frontend and backend solutions, ensuring secure authentication and effective product administration.",
      image: logoLibrary,
      techStack: [
        "Node.js",
        "MySQL",
        "Sequelize",
        "Express.js",
        "JWT",
        "Swagger",
        "Angular",
        "Angular Material",
        "TypeScript",
        "HTML5",
        "Sass",
        "Github",
        "APIRest",
      ],
      githubUrl: "https://github.com/andrezmazo/LibreriaFRONT",
      demoUrl: undefined,
    },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ProjectsSection>
      <SectionHeader>
        <SectionTitle
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {t("projects.title")}
        </SectionTitle>
        <SectionSubtitle
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {t("projects.subtitle")}
        </SectionSubtitle>
      </SectionHeader>

      <ProjectsGrid>
        <AnimatePresence>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {i18n.language === "es"
                    ? project.description
                    : project.description_en}
                </ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} technology={tech} />
                  ))}
                </TechStack>
                <ProjectLinks>
                  {project.demoUrl && (
                    <ProjectLink
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary"
                    >
                      <FaExternalLinkAlt /> {t("projects.viewProject")}
                    </ProjectLink>
                  )}
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                  >
                    <FaGithub /> {t("projects.viewCode")}
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;

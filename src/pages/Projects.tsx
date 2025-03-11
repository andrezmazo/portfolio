import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// Tipos y datos
interface ProjectType {
  id: number;
  title: string;
  description: string;
  description_en: string;
  image: string;
  github: string;
  demo: string;
  technologies: string[];
  category: string;
}

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-weight: 500;
  background-color: ${({ theme, active }) => active ? theme.primary : theme.background};
  color: ${({ theme, active }) => active ? 'white' : theme.text};
  border: 1px solid ${({ theme, active }) => active ? theme.primary : theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
  }
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

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
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

// Función para mostrar el icono adecuado según la tecnología
const TechIcon = ({ tech }: { tech: string }) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact />;
    case 'typescript':
      return <SiTypescript />;
    case 'node.js':
      return <FaNodeJs />;
    case 'express':
      return <SiExpress />;
    case 'mongodb':
      return <SiMongodb />;
    case 'firebase':
      return <SiFirebase />;
    case 'next.js':
      return <SiNextdotjs />;
    case 'tailwind':
      return <SiTailwindcss />;
    default:
      return <FaDatabase />;
  }
};

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  
  // Datos de proyectos
  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern, responsive e-commerce website with product filtering, cart management, and payment processing.",
      image: "/assets/projects/ecommerce.webp",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/andrezmazo/ecommerce-project",
      demoUrl: "https://ecommerce-demo.andresmazo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app to help teams organize, track, and manage their work efficiently with real-time updates.",
      image: "/assets/projects/taskmanager.webp",
      techStack: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/andrezmazo/task-manager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts for locations worldwide.",
      image: "/assets/projects/weather.webp",
      techStack: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
      githubUrl: "https://github.com/andrezmazo/weather-dashboard",
      demoUrl: "https://weather.andresmazo.com"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "An application to track workouts, set fitness goals, and monitor progress over time.",
      image: "/assets/projects/fitness.webp",
      techStack: ["Angular", "Firebase", "Material UI", "D3.js"],
      githubUrl: "https://github.com/andrezmazo/fitness-tracker"
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A web app that helps users discover recipes based on ingredients they have available.",
      image: "/assets/projects/recipe.webp",
      techStack: ["React", "Redux", "Spoonacular API", "Styled Components"],
      githubUrl: "https://github.com/andrezmazo/recipe-finder",
      demoUrl: "https://recipes.andresmazo.com"
    },
    {
      id: 6,
      title: "Personal Blog",
      description: "A tech blog with a content management system for publishing articles about web development.",
      image: "/assets/projects/blog.webp",
      techStack: ["Next.js", "GraphQL", "Auth0", "Tailwind CSS"],
      githubUrl: "https://github.com/andrezmazo/tech-blog",
      demoUrl: "https://blog.andresmazo.com"
    }
  ];
  
  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <ProjectsSection>
      <SectionHeader as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <SectionTitle variants={itemVariants}>{t('projects.title')}</SectionTitle>
        <SectionSubtitle variants={itemVariants}>{t('projects.subtitle')}</SectionSubtitle>
      </SectionHeader>
      
      <FilterContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </FilterButton>
        <FilterButton 
          active={filter === 'frontend'} 
          onClick={() => setFilter('frontend')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Frontend
        </FilterButton>
        <FilterButton 
          active={filter === 'backend'} 
          onClick={() => setFilter('backend')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Backend
        </FilterButton>
        <FilterButton 
          active={filter === 'fullstack'} 
          onClick={() => setFilter('fullstack')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Full Stack
        </FilterButton>
      </FilterContainer>
      
      <ProjectsGrid>
        <AnimatePresence>
          {filteredProjects.map((project) => (
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
                  {i18n.language === 'es' ? project.description : project.description_en}
                </ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, index) => (
                    <TechTag key={index}>
                      <TechIcon tech={tech} />
                      {tech}
                    </TechTag>
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
                      <FaExternalLinkAlt /> {t('projects.viewProject')}
                    </ProjectLink>
                  )}
                  <ProjectLink 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="secondary"
                  >
                    <FaGithub /> {t('projects.viewCode')}
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
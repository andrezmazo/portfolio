import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaFigma, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiAmazon, 
  SiJest, SiRedux, SiGraphql
} from 'react-icons/si';

interface SkillType {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
`;

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  
  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillItem = styled.div``;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => `${theme.primary}33`};
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)<{ level: number }>`
  width: ${({ level }) => `${level}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
`;

const Skills: React.FC = () => {
  const { t } = useTranslation();
  
  // Datos de habilidades
  const skills: SkillType[] = [
    // Frontend
    { name: 'React', icon: <FaReact />, level: 90, category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85, category: 'frontend' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 80, category: 'frontend' },
    { name: 'JavaScript', icon: <FaJs />, level: 90, category: 'frontend' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, category: 'frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, category: 'frontend' },
    { name: 'Redux', icon: <SiRedux />, level: 80, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, level: 85, category: 'backend' },
    { name: 'Express', icon: <SiExpress />, level: 80, category: 'backend' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75, category: 'backend' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70, category: 'backend' },
    { name: 'GraphQL', icon: <SiGraphql />, level: 65, category: 'backend' },
    { name: 'SQL', icon: <FaDatabase />, level: 75, category: 'backend' },
    
    // Herramientas
    { name: 'Git', icon: <FaGitAlt />, level: 90, category: 'tools' },
    { name: 'Docker', icon: <FaDocker />, level: 70, category: 'tools' },
    { name: 'AWS', icon: <SiAmazon />, level: 65, category: 'tools' },
    { name: 'Jest', icon: <SiJest />, level: 75, category: 'tools' },
    { name: 'Figma', icon: <FaFigma />, level: 80, category: 'tools' }
  ];
  
  // Filtrar habilidades por categoría
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
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
    }
  };
  
  return (
    <SkillsSection>
      <SectionHeader as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <SectionTitle variants={itemVariants}>{t('skills.title')}</SectionTitle>
        <SectionSubtitle variants={itemVariants}>{t('skills.subtitle')}</SectionSubtitle>
      </SectionHeader>
      
      <CategoriesContainer>
        {/* Frontend Skills */}
        <CategoryCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CategoryTitle>{t('skills.frontend')}</CategoryTitle>
          <SkillList>
            {frontendSkills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillHeader>
                  <SkillName>{skill.icon} {skill.name}</SkillName>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillHeader>
                <ProgressBarContainer>
                  <ProgressBar level={skill.level} />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillList>
        </CategoryCard>
        
        {/* Backend Skills */}
        <CategoryCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CategoryTitle>{t('skills.backend')}</CategoryTitle>
          <SkillList>
            {backendSkills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillHeader>
                  <SkillName>{skill.icon} {skill.name}</SkillName>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillHeader>
                <ProgressBarContainer>
                  <ProgressBar level={skill.level} />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillList>
        </CategoryCard>
        
        {/* Tools */}
        <CategoryCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CategoryTitle>{t('skills.tools')}</CategoryTitle>
          <SkillList>
            {toolsSkills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillHeader>
                  <SkillName>{skill.icon} {skill.name}</SkillName>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillHeader>
                <ProgressBarContainer>
                  <ProgressBar level={skill.level} />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillList>
        </CategoryCard>
      </CategoriesContainer>
    </SkillsSection>
  );
};

export default Skills;
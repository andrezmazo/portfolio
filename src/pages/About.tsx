import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AboutSection = styled.section`
  padding: 6rem 0;
`;

const PageTitle = styled(motion.h1)`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 4rem;
  font-size: 1.2rem;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 40% 60%;
  }
`;

const AboutImageContainer = styled(motion.div)`
  text-align: center;
`;

const AboutImage = styled.img`
  max-width: 80%;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  
  @media (min-width: 768px) {
    max-width: 90%;
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutText = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AboutCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.primary};
  }
  
  svg {
    font-size: 1.8rem;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0.75rem;
    left: 0.25rem;
    width: 1px;
    height: calc(100% + 1rem);
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.3;
  }
  
  &:last-child:after {
    display: none;
  }
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.text};
  }
  
  h5 {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
  }
  
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  margin-top: 2rem;
  box-shadow: 0 4px 8px ${({ theme }) => `${theme.primary}50`};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px ${({ theme }) => `${theme.primary}50`};
  }
`;

const About: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  const education = [
    {
      title: t('about.education1Title'),
      institution: t('about.education1Institution'),
      year: t('about.education1Year'),
      description: t('about.education1Description')
    },
    {
      title: t('about.education2Title'),
      institution: t('about.education2Institution'),
      year: t('about.education2Year'),
      description: t('about.education2Description')
    }
  ];

  const experience = [
    {
      title: t('about.experience1Title'),
      company: t('about.experience1Company'),
      year: t('about.experience1Year'),
      description: t('about.experience1Description')
    },
    {
      title: t('about.experience2Title'),
      company: t('about.experience2Company'),
      year: t('about.experience2Year'),
      description: t('about.experience2Description')
    },
    {
      title: t('about.experience3Title'),
      company: t('about.experience3Company'),
      year: t('about.experience3Year'),
      description: t('about.experience3Description')
    }
  ];
  
  return (
    <ResponsiveContainer>
      <AboutSection>
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('about.title')}
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('about.subtitle')}
        </PageSubtitle>
        
        <AboutContainer>
          <AboutImageContainer
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AboutImage src="/assets/about-me.webp" alt={t('about.imageAlt')} />
          </AboutImageContainer>
          
          <AboutContent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AboutText as={motion.div} variants={itemVariants}>
              <h2>{t('about.aboutMeTitle')}</h2>
              <p>{t('about.description')}</p>
              <p>{t('about.additionalInfo')}</p>
              
              <ResumeButton 
                href="/assets/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> {t('about.downloadResume')}
              </ResumeButton>
            </AboutText>
            
            <AboutCards>
              <AboutCard
                variants={itemVariants}
              >
                <h3><FaGraduationCap /> {t('about.education')}</h3>
                {education.map((item, index) => (
                  <TimelineItem key={index}>
                    <h4>{item.title}</h4>
                    <h5>{item.institution}</h5>
                    <p>{item.year}</p>
                    <p>{item.description}</p>
                  </TimelineItem>
                ))}
              </AboutCard>
              
              <AboutCard
                variants={itemVariants}
              >
                <h3><FaBriefcase /> {t('about.experience')}</h3>
                {experience.map((item, index) => (
                  <TimelineItem key={index}>
                    <h4>{item.title}</h4>
                    <h5>{item.company}</h5>
                    <p>{item.year}</p>
                    <p>{item.description}</p>
                  </TimelineItem>
                ))}
              </AboutCard>
            </AboutCards>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
    </ResponsiveContainer>
  );
};

export default About;
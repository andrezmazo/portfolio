import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { ThemeContext } from '../context/ThemeContext';
import { ScrollContext } from '../context/ScrollContext';
import Waves from '../components/Waves/Waves';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// WavesContainer remains unchanged
const WavesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  opacity: 0.4;
  pointer-events: none;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const MainContainer = styled.div`
  width: 100%;
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  scroll-margin-top: 80px; /* Adjust based on navbar height */
  overflow: hidden;
`;

// Variants for scroll animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    }
  }
};

interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children, threshold = 0.15 }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    triggerOnce: false,
    threshold: threshold
  });
  
  const { setActiveSection } = useContext(ScrollContext);
  
  useEffect(() => {
    if (isVisible) {
      setActiveSection(id);
    }
  }, [isVisible, id, setActiveSection]);
  
  return (
    <Section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {children}
    </Section>
  );
};

const Main: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const waveColor = isDarkMode
    ? "rgba(141, 161, 255, 0.8)"
    : "rgba(18, 136, 156, 0.5)";
  
  return (
    <MainContainer>
      <WavesContainer>
        <Waves
          lineColor={waveColor}
          backgroundColor="transparent"
          waveSpeedX={0.035}
          waveSpeedY={0.03}
          waveAmpX={60}
          waveAmpY={35}
          xGap={20}
          yGap={28}
        />
      </WavesContainer>
      
      <AnimatedSection id="home" threshold={0.2}>
        <Home />
      </AnimatedSection>
      
      <AnimatedSection id="about" threshold={0.1}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection id="projects" threshold={0.1}>
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection id="skills" threshold={0.1}>
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection id="contact" threshold={0.1}>
        <Contact />
      </AnimatedSection>
    </MainContainer>
  );
};

export default Main;

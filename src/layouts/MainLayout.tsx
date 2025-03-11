import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <MainContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-theme={theme}
    >
      <Navbar />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default MainLayout;
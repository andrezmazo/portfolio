import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) =>
    theme.navBackground}; // Use the new navBackground color
  box-shadow: ${({ theme }) => theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.accent};
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) =>
      theme.navBackground}; // Also update here for mobile menu
    box-shadow: ${({ theme }) => theme.shadow};
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItem = styled(motion.div)<{ active?: boolean }>`
  margin: 0 1rem;
  
  a {
    color: ${({ theme, active }) => active ? theme.accent : theme.text};
    font-weight: ${({ active }) => active ? '600' : '400'};
    padding: 0.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${({ active }) => active ? '100%' : '0'};
      height: 2px;
      background-color: ${({ theme }) => theme.accent};
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const LanguageToggle = styled.button`
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  
  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.contact'), path: '/contact' }
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <Nav>
      <Logo to="/">
        Andrés<span>Mazo</span>
      </Logo>
      
      <MobileMenuButton onClick={() => setIsOpen(true)}>
        <FiMenu />
      </MobileMenuButton>
      
      <AnimatePresence>
        {isOpen && (
          <NavLinks isOpen={isOpen}>
            <CloseButton onClick={() => setIsOpen(false)}>
              <FiX />
            </CloseButton>
            
            {navItems.map((item) => (
              <NavItem 
                key={item.path}
                active={isActive(item.path)}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={item.path}>{item.name}</Link>
              </NavItem>
            ))}
            
            <ControlsContainer>
              <ThemeToggle onClick={toggleTheme}>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </ThemeToggle>
              
              <LanguageToggle onClick={toggleLanguage}>
                {language === 'es' ? 'EN' : 'ES'}
              </LanguageToggle>
            </ControlsContainer>
          </NavLinks>
        )}
      </AnimatePresence>
      
      <NavLinks isOpen={false}>
        {navItems.map((item) => (
          <NavItem key={item.path} active={isActive(item.path)}>
            <Link to={item.path}>{item.name}</Link>
          </NavItem>
        ))}
        
        <ControlsContainer>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </ThemeToggle>
          
          <LanguageToggle onClick={toggleLanguage}>
            {language === 'es' ? 'EN' : 'ES'}
          </LanguageToggle>
        </ControlsContainer>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
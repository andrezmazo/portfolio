import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { ScrollContext } from "../context/ScrollContext";
import RotatingText, { RotatingTextRef } from "./RotatingText";

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

const LogoContainer = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled.span`
  margin-right: 4px;
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
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
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItem = styled(motion.div)<{ active?: boolean }>`
  margin: 0 1rem;

  a {
    color: ${({ theme, active }) => (active ? theme.accent : theme.text)};
    font-weight: ${({ active }) => (active ? "600" : "400")};
    padding: 0.5rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${({ active }) => (active ? "100%" : "0")};
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

// Update NavLinkStyled to use anchor tags for smooth scrolling
const NavLinkStyled = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.primary};

    &::after {
      width: 100%;
    }
  }
`;

// Update MobileNavLink
const MobileNavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { activeSectionId, scrollToSection } = useContext(ScrollContext);
  const [isOpen, setIsOpen] = useState(false);
  const rotatingTextRef = useRef<RotatingTextRef>(null);

  const rotatingTexts = [
    "Zapata",
    "Mazo",
    "Software",
    "Engineer",
    "Developer",
    "Full Stack",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Prisma",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Node.js",
    "Python",
    "Developer",
    "MongoDB",
    "Next.js",
    "Engineer",
    "Express",
    "GraphQL",
    "UI/UX",
    "Automation",
    "AI",
    "Machine Learning",
    "Data Science",
    "Data Analysis",
  ];

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle smooth scroll with context
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
    setIsOpen(false);
  };

  const navLinks = [
    { to: "home", label: t("nav.home") },
    { to: "about", label: t("nav.about") },
    { to: "projects", label: t("nav.projects") },
    { to: "skills", label: t("nav.skills") },
    { to: "contact", label: t("nav.contact") },
  ];

  // Check if section is active based on context
  const isActive = (id: string) => {
    return activeSectionId === id;
  };

  return (
    <Nav>
      <LogoContainer href="#home" onClick={(e) => handleScrollTo(e, "home")}>
        <LogoText>Andrés</LogoText>
        <RotatingText
          texts={rotatingTexts}
          rotationInterval={2000}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          staggerDuration={0.025}
          staggerFrom="last"
          ref={rotatingTextRef}
          splitBy="characters"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
        />
      </LogoContainer>

      <MobileMenuButton onClick={() => setIsOpen(true)}>
        <FiMenu />
      </MobileMenuButton>

      <AnimatePresence>
        {isOpen && (
          <NavLinks $isOpen={isOpen}>
            <CloseButton onClick={() => setIsOpen(false)}>
              <FiX />
            </CloseButton>

            {navLinks.map((link) => (
              <NavItem
                key={link.to}
                active={isActive(link.to)}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MobileNavLink
                  href={`#${link.to}`}
                  onClick={(e) => handleScrollTo(e, link.to)}
                  className={`nav-item ${isActive(link.to) ? "active" : ""}`}
                >
                  {link.label}
                </MobileNavLink>
              </NavItem>
            ))}

            <ControlsContainer>
              <ThemeToggle onClick={toggleTheme}>
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </ThemeToggle>

              <LanguageToggle
                onClick={() => changeLanguage(language === "es" ? "en" : "es")}
              >
                {language === "es" ? "EN" : "ES"}
              </LanguageToggle>
            </ControlsContainer>
          </NavLinks>
        )}
      </AnimatePresence>

      <NavLinks $isOpen={false}>
        {navLinks.map((link) => (
          <NavItem key={link.to} active={isActive(link.to)}>
            <NavLinkStyled
              href={`#${link.to}`}
              onClick={(e) => handleScrollTo(e, link.to)}
              className={`nav-item ${isActive(link.to) ? "active" : ""}`}
            >
              {link.label}
            </NavLinkStyled>
          </NavItem>
        ))}

        <ControlsContainer>
          <ThemeToggle onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </ThemeToggle>

          <LanguageToggle
            onClick={() => changeLanguage(language === "es" ? "en" : "es")}
          >
            {language === "es" ? "EN" : "ES"}
          </LanguageToggle>
        </ControlsContainer>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

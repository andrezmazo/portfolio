import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import ResponsiveContainer from "./ResponsiveContainer";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1.5rem 0;
  margin-top: 3rem;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 2rem 0;
    margin-top: 4rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 0.85rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
    justify-content: flex-start;
  }

  svg {
    color: #e74c3c;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    opacity: 1;
  }
`;

const CurrentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <ResponsiveContainer>
        <FooterContent>
          <CopyrightText>
            © {CurrentYear} Andrés Zapata Mazo. {t("footer.madeWith")}{" "}
            <FaHeart /> {t("footer.rights")}
          </CopyrightText>
          <SocialLinks>
            <SocialLink
              href="https://github.com/andrezmazo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/andresmazo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </ResponsiveContainer>
    </FooterContainer>
  );
};

export default Footer;
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { useIsMobile } from "../hooks/useMediaQuery";

// Update the HeroSection with a higher z-index
const HeroSection = styled.section`
  position: relative;
  z-index: 1; // Ensure it's above the waves
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 100px);
  padding: 1rem 0 4rem;
  overflow: hidden; // Ensure waves don't overflow the section

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 150px);
    padding: 4rem 0;
  }
`;

// Add z-index to content elements to ensure they're above the waves
const HeroContent = styled.div`
  flex: 3;
  order: 2;
  text-align: center;
  position: relative;
  z-index: 2; // Ensure content is above waves

  @media (min-width: 768px) {
    order: 1;
    text-align: left;
    max-width: 50%;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2; // Ensure image is above waves

  @media (min-width: 768px) {
    order: 2;
    margin-bottom: 0;
  }
`;

const HeroImage = styled(motion.img)`
  max-width: calc(80% - 2rem);
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 768px) {
    max-width: 30%;
  }
`;

const Greeting = styled(motion.h3)`
  color: ${({ theme }) => theme.accent};
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.accent}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 992px) {
    font-size: 4.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const CTAButton = styled(motion.a)`
  padding: 1rem 1.8rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px ${({ theme }) => `${theme.primary}50`};

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.textAccent};
    transform: translateY(-1px);
    box-shadow: 0 6px 15px ${({ theme }) => `${theme.primary}50`};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const SecondaryButton = styled.a`
  padding: 1rem 1.8rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const Highlights = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 4rem;
  }
`;

const Highlight = styled(motion.div)`
  text-align: center;
  min-width: 100px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const HighlightValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  display: block;
  margin-bottom: 0.5rem;
`;

const HighlightLabel = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
  display: block;
  line-height: 1.2;
`;

const Home: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // Function to calculate experience from February 10, 2022
  const calculateExperience = () => {
    const startDate = new Date(2022, 1, 10); // February 10, 2022 (month is 0-indexed)
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      days += lastMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const experience = calculateExperience();
  const experienceDisplay =
    experience.years > 0
      ? `${experience.years}.${experience.months}+`
      : `${experience.months}m`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <ResponsiveContainer>
      <HeroSection>
        <HeroContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>{t("home.greeting")}</Greeting>
          <Name variants={itemVariants}>{t("home.name")}</Name>
          <Title variants={itemVariants}>{t("home.title")}</Title>
          <Description variants={itemVariants}>
            {t("home.description")}
          </Description>

          <ButtonContainer variants={itemVariants}>
            <CTAButton
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("home.viewProjects")} <FaArrowRight />
            </CTAButton>
            <SecondaryButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("contact.title")}
            </SecondaryButton>
          </ButtonContainer>

          <Highlights>
            <Highlight
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <HighlightValue>{experienceDisplay}</HighlightValue>
              <HighlightLabel>{t("home.yearsExperience")}</HighlightLabel>
            </Highlight>

            <Highlight
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <HighlightValue>50+</HighlightValue>
              <HighlightLabel>{t("home.projectsCompleted")}</HighlightLabel>
            </Highlight>

            <Highlight
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <HighlightValue>15+</HighlightValue>
              <HighlightLabel>{t("home.clientsWorldwide")}</HighlightLabel>
            </Highlight>
          </Highlights>
        </HeroContent>

        <HeroImageContainer>
          <HeroImage
            src="/assets/pic.jpg"
            alt={t("home.name")}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
          />
        </HeroImageContainer>
      </HeroSection>
    </ResponsiveContainer>
  );
};

export default Home;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaGraduationCap,
  FaBriefcase,
  FaTags,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ResponsiveContainer from "../components/ResponsiveContainer";
import Badge from "../components/Badge";
import { useIsMobile } from "../hooks/useMediaQuery";

const AboutSection = styled.section`
  padding: 1rem 0;
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
    grid-template-columns: 37% 59%;
  }
`;

const AboutImageContainer = styled(motion.div)`
  text-align: center;
`;

const AboutImage = styled(motion.img)`
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const CardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AboutCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.primary};
  }

  svg {
    font-size: 1rem;
  }
`;

const TimelineHeader = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? `${theme.primary}15` : "transparent"};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => `${theme.primary}15`};
  }
`;

const TimelineHeaderContent = styled.div`
  flex: 1;
`;

const TimelineItem = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => `${theme.primary}30`};
  border-radius: 0.5rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TimelineContent = styled(motion.div)`
  padding: 0 1rem 1rem 1rem;
`;

const SkillBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

const SkillsHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
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
    color: white;
    box-shadow: 0 6px 12px ${({ theme }) => `${theme.primary}50`};
  }
`;

const ItemHeaderTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const ItemHeaderSubtitle = styled.h5`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin: 0.25rem 0 0 0;
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  /* margin-bottom: 0.5rem; */
  line-height: 1.5;
`;

const ItemYear = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textLight || theme.text};
  opacity: 0.7;
  display: block;
  margin-top: 0.25rem;
`;

const LiveSiteButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const LiveSiteButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => `${theme.primary}15`};
  }
`;

interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  description: string;
  skills: string[];
  liveUrl?: string | string[];
}

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const [activeEducationMap, setActiveEducationMap] = useState<
    Map<number, boolean>
  >(new Map());
  const [activeExperienceMap, setActiveExperienceMap] = useState<
    Map<number, boolean>
  >(new Map());

  const toggleEducation = (index: number) => {
    setActiveEducationMap((prevMap) => {
      const newMap = new Map(prevMap);

      // Determine how many columns based on screen size
      const getColumnsCount = () => {
        if (window.innerWidth >= 1200) return 3; // Large screens
        if (window.innerWidth >= 768) return 2; // Medium screens
        return 1; // Small screens
      };

      const columns = getColumnsCount();
      const rowIndex = Math.floor(index / columns);
      const startIndex = rowIndex * columns;
      const endIndex = Math.min(startIndex + columns - 1, education.length - 1);

      // Check if any card in the row is currently active
      const isAnyInRowActive = Array.from(
        { length: endIndex - startIndex + 1 },
        (_, i) => prevMap.get(startIndex + i)
      ).some(Boolean);

      // Toggle all cards in the same row
      for (let i = startIndex; i <= endIndex; i++) {
        newMap.set(i, !isAnyInRowActive);
      }

      return newMap;
    });
  };

  const toggleExperience = (index: number) => {
    setActiveExperienceMap((prevMap) => {
      const newMap = new Map(prevMap);

      // Determine how many columns based on screen size
      const getColumnsCount = () => {
        if (window.innerWidth >= 1200) return 3; // Large screens
        if (window.innerWidth >= 768) return 2; // Medium screens
        return 1; // Small screens
      };

      const columns = getColumnsCount();
      const rowIndex = Math.floor(index / columns);
      const startIndex = rowIndex * columns;
      const endIndex = Math.min(
        startIndex + columns - 1,
        experience.length - 1
      );

      // Check if any card in the row is currently active
      const isAnyInRowActive = Array.from(
        { length: endIndex - startIndex + 1 },
        (_, i) => prevMap.get(startIndex + i)
      ).some(Boolean);

      // Toggle all cards in the same row
      for (let i = startIndex; i <= endIndex; i++) {
        newMap.set(i, !isAnyInRowActive);
      }

      return newMap;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const education = [
    {
      title: t("about.education1Title"),
      institution: t("about.education1Institution"),
      year: t("about.education1Year"),
      description: t("about.education1Description"),
    },
    {
      title: t("about.education2Title"),
      institution: t("about.education2Institution"),
      year: t("about.education2Year"),
      description: t("about.education2Description"),
    },
    {
      title: t("about.education3Title"),
      institution: t("about.education3Institution"),
      year: t("about.education3Year"),
      description: t("about.education3Description"),
    },
    {
      title: t("about.education4Title"),
      institution: t("about.education4Institution"),
      year: t("about.education4Year"),
      description: t("about.education4Description"),
    },
  ];

  const experience: ExperienceItem[] = [
    {
      title: t("about.experience1Title"),
      company: t("about.experience1Company"),
      year: t("about.experience1Year"),
      description: t("about.experience1Description"),
      skills:
        (t("about.experience1Skills", { returnObjects: true }) as string[]) ||
        [],
      liveUrl: "https://www.hustlelegal.com/",
    },
    {
      title: t("about.experience2Title"),
      company: t("about.experience2Company"),
      year: t("about.experience2Year"),
      description: t("about.experience2Description"),
      skills:
        (t("about.experience2Skills", { returnObjects: true }) as string[]) ||
        [],
      liveUrl: [
        "https://www.appui.contraloria.gov.co/manual",
        "https://www.appui.contraloria.gov.co/catalogue",
        "https://observatorio.icfes.gov.co",
      ],
    },
    {
      title: t("about.experience3Title"),
      company: t("about.experience3Company"),
      year: t("about.experience3Year"),
      description: t("about.experience3Description"),
      skills:
        (t("about.experience3Skills", { returnObjects: true }) as string[]) ||
        [],
      liveUrl: "https://atvconecta.com/login",
    },
    {
      title: t("about.experience4Title"),
      company: t("about.experience4Company"),
      year: t("about.experience4Year"),
      description: t("about.experience4Description"),
      skills:
        (t("about.experience4Skills", { returnObjects: true }) as string[]) ||
        [],
    },
    {
      title: t("about.experience5Title"),
      company: t("about.experience5Company"),
      year: t("about.experience5Year"),
      description: t("about.experience5Description"),
      skills:
        (t("about.experience5Skills", { returnObjects: true }) as string[]) ||
        [],
      liveUrl: "https://www.medellin.gov.co/satmed/nuevo-caso",
    },
    {
      title: t("about.experience6Title"),
      company: t("about.experience6Company"),
      year: t("about.experience6Year"),
      description: t("about.experience6Description"),
      skills:
        (t("about.experience6Skills", { returnObjects: true }) as string[]) ||
        [],
    },
    {
      title: t("about.experience7Title"),
      company: t("about.experience7Company"),
      year: t("about.experience7Year"),
      description: t("about.experience7Description"),
      skills:
        (t("about.experience7Skills", { returnObjects: true }) as string[]) ||
        [],
    },
    {
      title: t("about.experience8Title"),
      company: t("about.experience8Company"),
      year: t("about.experience8Year"),
      description: t("about.experience8Description"),
      skills:
        (t("about.experience8Skills", { returnObjects: true }) as string[]) ||
        [],
    },
    {
      title: t("about.experience9Title"),
      company: t("about.experience9Company"),
      year: t("about.experience9Year"),
      description: t("about.experience9Description"),
      skills:
        (t("about.experience9Skills", { returnObjects: true }) as string[]) ||
        [],
    },
  ];

  const getResumeFile = () => {
    return i18n.language === "es"
      ? "/assets/pdf/HDV-AndresZapataMazo.pdf"
      : "/assets/pdf/CV-AndresZapataMazo.pdf";
  };

  return (
    <ResponsiveContainer>
      <AboutSection>
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("about.title")}
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("about.subtitle")}
        </PageSubtitle>

        <AboutContainer>
          <AboutImageContainer
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AboutImage
              src="/assets/img/pc-hocus.png"
              alt={t("about.imageAlt")}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
            />
          </AboutImageContainer>

          <AboutContent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AboutText as={motion.div} variants={itemVariants}>
              <h2>{t("about.aboutMeTitle")}</h2>
              <p>{t("about.description")}</p>
              <p>{t("about.additionalInfo")}</p>

              <ResumeButton
                href={getResumeFile()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> {t("about.downloadResume")}
              </ResumeButton>
            </AboutText>
          </AboutContent>
        </AboutContainer>

        <AboutCards>
          <AboutCard variants={itemVariants}>
            <h3>
              <FaGraduationCap /> {t("about.education")}
            </h3>
            <CardSection>
              {education.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineHeader
                    $isActive={activeEducationMap.get(index) || false}
                    onClick={() => toggleEducation(index)}
                  >
                    <TimelineHeaderContent>
                      <ItemHeaderTitle>{item.title}</ItemHeaderTitle>
                      <ItemHeaderSubtitle>
                        {item.institution}
                      </ItemHeaderSubtitle>
                      <ItemYear>{item.year}</ItemYear>
                    </TimelineHeaderContent>
                    {activeEducationMap.get(index) ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </TimelineHeader>

                  <AnimatePresence>
                    {activeEducationMap.get(index) && (
                      <TimelineContent
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <ItemDescription>{item.description}</ItemDescription>
                      </TimelineContent>
                    )}
                  </AnimatePresence>
                </TimelineItem>
              ))}
            </CardSection>
          </AboutCard>

          <AboutCard variants={itemVariants}>
            <h3>
              <FaBriefcase /> {t("about.experience")}
            </h3>
            <CardSection>
              {experience.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineHeader
                    $isActive={activeExperienceMap.get(index) || false}
                    onClick={() => toggleExperience(index)}
                  >
                    <TimelineHeaderContent>
                      <ItemHeaderTitle>{item.title}</ItemHeaderTitle>
                      <ItemHeaderSubtitle>{item.company}</ItemHeaderSubtitle>
                      <ItemYear>{item.year}</ItemYear>
                    </TimelineHeaderContent>
                    {activeExperienceMap.get(index) ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </TimelineHeader>

                  <AnimatePresence>
                    {activeExperienceMap.get(index) && (
                      <TimelineContent
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <ItemDescription>{item.description}</ItemDescription>
                        {item.skills && item.skills.length > 0 && (
                          <>
                            <SkillsHeading>
                              <FaTags /> {t("about.skillsTitle")}
                            </SkillsHeading>
                            <SkillBadges>
                              {item.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} technology={skill} />
                              ))}
                            </SkillBadges>
                          </>
                        )}
                        {item.liveUrl && (
                          <>
                            {Array.isArray(item.liveUrl) ? (
                              <LiveSiteButtonsContainer>
                                {item.liveUrl.map((url, urlIndex) => (
                                  <LiveSiteButton
                                    key={urlIndex}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FaExternalLinkAlt />{" "}
                                    {t("about.viewLiveSite")} {urlIndex + 1}
                                  </LiveSiteButton>
                                ))}
                              </LiveSiteButtonsContainer>
                            ) : (
                              <LiveSiteButton
                                href={item.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaExternalLinkAlt /> {t("about.viewLiveSite")}
                              </LiveSiteButton>
                            )}
                          </>
                        )}
                      </TimelineContent>
                    )}
                  </AnimatePresence>
                </TimelineItem>
              ))}
            </CardSection>
          </AboutCard>
        </AboutCards>
      </AboutSection>
    </ResponsiveContainer>
  );
};

export default About;

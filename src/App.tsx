import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";
import { lightTheme, darkTheme } from "./styles/themes";
import GlobalStyle from "./styles/globalStyles";

// Contexts
import { ThemeContext } from "./context/ThemeContext";
import { LanguageContext } from "./context/LanguageContext";
import { ScrollProvider } from "./context/ScrollContext";

// Main page (combines all sections)
import Main from "./pages/Main";

// Layout
import MainLayout from "./layouts/MainLayout";

// Snackbar y confetti
import { SnackbarProvider, useSnackbar } from "notistack";
import Confetti from "react-confetti";
import { useTranslation } from "react-i18next";

const ConfettiAndSnackbar: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasShownBottomConfetti, setHasShownBottomConfetti] = useState(false);

  // Confetti y snackbar a los 30 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      enqueueSnackbar(t("global.thankYouVisit"), {
        variant: "success",
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000);
    }, 5000);
    return () => clearTimeout(timer);
  }, [enqueueSnackbar, t]);

  // Confetti y snackbar al llegar al fondo SOLO UNA VEZ
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
        !hasShownBottomConfetti
      ) {
        enqueueSnackbar(t("global.thankYouBottom"), { variant: "info" });
        setShowConfetti(true);
        setHasShownBottomConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enqueueSnackbar, t, hasShownBottomConfetti]);

  return showConfetti ? (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={250}
      recycle={false}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  ) : null;
};

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("es");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <ConfettiAndSnackbar />
      <ThemeContext.Provider
        value={{ theme, toggleTheme, isDarkMode: theme === "dark" }}
      >
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          <ScrollProvider>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
              <I18nextProvider i18n={i18n}>
                <GlobalStyle />
                <BrowserRouter>
                  <MainLayout>
                    <Routes>
                      <Route path="/" element={<Main />} />
                    </Routes>
                  </MainLayout>
                </BrowserRouter>
              </I18nextProvider>
            </ThemeProvider>
          </ScrollProvider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </SnackbarProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/globalStyles';

// Contextos
import { ThemeContext } from './context/ThemeContext';
import { LanguageContext } from './context/LanguageContext';

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// Layouts
import MainLayout from './layouts/MainLayout';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <I18nextProvider i18n={i18n}>
            <GlobalStyle />
            <BrowserRouter>
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </MainLayout>
            </BrowserRouter>
          </I18nextProvider>
        </ThemeProvider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import i18n from '../i18n/config';

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Check for saved language preference or use browser language
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'es'];
    
    const detectedLanguage = savedLanguage || 
      (supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en');
    
    setLanguage(detectedLanguage);
    i18n.changeLanguage(detectedLanguage);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
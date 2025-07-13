import React, { createContext, useState, useCallback, ReactNode } from 'react';

interface ScrollContextType {
  activeSectionId: string;
  setActiveSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

export const ScrollContext = createContext<ScrollContextType>({
  activeSectionId: 'home',
  setActiveSection: () => {},
  scrollToSection: () => {},
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = useState('home');

  const setActiveSection = useCallback((id: string) => {
    setActiveSectionId(id);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSectionId(id);
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSectionId, setActiveSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;

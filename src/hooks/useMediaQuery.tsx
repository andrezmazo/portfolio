import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design
 * @param query CSS media query string e.g. '(min-width: 768px)'
 * @returns boolean indicating if the media query matches
 */
const useMediaQuery = (query: string): boolean => {
  // Default to false for SSR
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create media query list
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Create handler function
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    
    // Add event listener
    mediaQuery.addEventListener('change', handler);
    
    // Cleanup
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

// Predefined breakpoints
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');

export default useMediaQuery;

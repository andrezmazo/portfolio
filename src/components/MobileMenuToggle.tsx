import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

const Button = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 200;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Path = styled(motion.path)`
  fill: transparent;
  stroke: ${({ theme }) => theme.text};
  stroke-width: 3;
  stroke-linecap: round;
`;

const MobileMenuToggle: React.FC<ToggleProps> = ({ isOpen, toggle }) => {
  return (
    <Button 
      onClick={toggle} 
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </Button>
  );
};

export default MobileMenuToggle;

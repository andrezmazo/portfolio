import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  fluid?: boolean;
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div<{ $fluid: boolean }>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ $fluid }) =>
    !$fluid &&
    `
      @media (min-width: 576px) {
        max-width: 540px;
      }
      
      @media (min-width: 768px) {
        max-width: 720px;
      }
      
      @media (min-width: 992px) {
        max-width: 960px;
      }
      
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
    `}
`;

const ResponsiveContainer: React.FC<ContainerProps> = ({
  fluid = false,
  children,
  className,
}) => {
  return (
    <StyledContainer $fluid={fluid} className={className}>
      {children}
    </StyledContainer>
  );
};

export default ResponsiveContainer;

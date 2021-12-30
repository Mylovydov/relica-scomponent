import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../../styles/theme';

// StyledProps

// Styled
const StyledAuthImageContainer = styled.div`
   padding: 17.5rem 2rem 0 10rem;
   width: 100%;
   position: relative;
   z-index: 2;

   @media (max-width: 1024px) {
      padding: 17.5rem 2rem 0 7rem;
   }

   @media (max-width: ${baseTheme.media.md2}) {
      padding: 5.5rem 1rem;
      display: flex;
      flex-direction: column;
   }

   @media (max-width: ${baseTheme.media.md3}) {
      padding: 3.5rem 1rem;
   }

   @media (max-width: ${baseTheme.media.md4}) {
      padding: 2.2rem 1rem;
   }
`

// ComponentProps


export const AuthImageContainer: FC = ({children}) => {
   return (
      <StyledAuthImageContainer>
         {children}
      </StyledAuthImageContainer>
   );
};
import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../../styles/theme'


// StyledProps
interface StyledAuthMainContentProps {
   margin?: string,
   textAlign?: string,
   md2MediaMargin?: string,
   md4MediaMargin?: string
}

// Styled
const StyledAuthMainContent = styled.div<StyledAuthMainContentProps>`
   margin: ${props => props.margin || '4rem 0 0 0'};

   h1 {
      font-weight: 700;
      font-size: 4rem;
      line-height: 132%;
      text-shadow: 0px 3px 6px #00000038;
      max-width: 49rem;
      color: #fff;
   }

   @media (max-width: ${baseTheme.media.md2}) {
      text-align: ${props => props.textAlign || 'center'};
      margin: ${props => props.md2MediaMargin || '1.5rem auto 0'};

      h1 {
         margin: 0 auto;
      }
   }

   @media (max-width: ${baseTheme.media.md3}) {

      h1 {
         font-size: 3rem;
      }
   }

   @media (max-width: ${baseTheme.media.md4}) {
      margin-top: ${props => props.md4MediaMargin || '0.5rem'};

      h1 {
         max-width: 30rem;
         font-size: 2.2rem;
      }
   }
`

// ComponentProps
export const AuthMainContent: FC = ({children}) => {
   return (
      <StyledAuthMainContent>
         {children}
      </StyledAuthMainContent>
   );
};
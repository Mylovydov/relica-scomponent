import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledAuthActionContainerProps {
   maxWidth?: string
}
// Styled
const StyledAuthActionContainer = styled.div<StyledAuthActionContainerProps>`
   max-width: ${props => props.maxWidth || '43rem'};
   width: 100%;
   margin: 0 auto;
`

// ComponentProps
interface AuthActionContainerProps {
   maxWidth?: string
}

export const AuthActionContainer: FC<AuthActionContainerProps> = (
   {
      maxWidth,
      children
   }

   ) => {
   return (
      <StyledAuthActionContainer maxWidth={maxWidth}>
         {children}
      </StyledAuthActionContainer>
   );
};
import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps

// Styled
const StyledAuthActionBody = styled.div`
   padding: 0 1.5rem;
`

// ComponentProps
// interface AuthActionBodyProps {

// }

export const AuthActionBody: FC = ({children}) => {
   return (
      <StyledAuthActionBody>
         {children}
      </StyledAuthActionBody>
   );
};
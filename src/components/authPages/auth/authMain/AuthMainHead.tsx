import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps

// Styled
const StyledAuthMainHead = styled.div`

`


// ComponentProps


export const AuthMainHead: FC = ({children}) => {
   return (
      <StyledAuthMainHead>
         {children}
      </StyledAuthMainHead>
   );
};
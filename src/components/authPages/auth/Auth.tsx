import React, { FC } from 'react';
import styled from 'styled-components';

import { AuthBody } from './AuthBody';

// Styled
const StyledAuth = styled.div`
   height: 100%;
`

// ComponentProps
// interface AuthProps {

// }

export const Auth: FC = ({children}) => {
   return (
      <StyledAuth>
         <AuthBody>
            {children}
         </AuthBody>
      </StyledAuth>
   );
};
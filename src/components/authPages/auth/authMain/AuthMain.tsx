import React, { FC } from 'react';
import styled from 'styled-components';

import { AuthMainHead } from './AuthMainHead';
import { AuthMainContent } from './AuthMainContent';
import { Logo } from '../../../common/logo/Logo';

// StyledProps

// Styled
const StyledAuthMain = styled.div`

`
// ComponentProps


export const AuthMain: FC = () => {
   return (
      <StyledAuthMain>
         <AuthMainHead>
            <Logo imgPath={"/assets/logo.png"}/>
         </AuthMainHead>

         <AuthMainContent>
            <h1>Post photos. Make money. Maintain ownership</h1>
         </AuthMainContent>
      </StyledAuthMain>
   );
};
import React, { FC } from 'react';
import styled from 'styled-components';

import { AuthMainHead } from './AuthMainHead';
import { AuthMainContent } from './AuthMainContent';
import { Logo } from '../../../common/logo/Logo';
import { StyledTitle } from '../../../typography/Typography1';
import { baseTheme } from '../../../../styles/theme';

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
            <StyledTitle
               color={baseTheme.colors.white}
               md2FontSize={'3.5rem'}
               md4FontSize={'1.8rem'}
            >
            Post photos. Make money. Maintain ownership
            </StyledTitle>
         </AuthMainContent>
      </StyledAuthMain>
   );
};
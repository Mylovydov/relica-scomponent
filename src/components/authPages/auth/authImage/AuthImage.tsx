import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../../styles/theme';
import { AuthImageContainer } from './AuthImageContainer';
import { AuthImageBg } from './AuthImageBg';


// StyledProps

// Styled
const StyledAuthImage = styled.div`
   flex: 0 1 56%;
   position: relative;
   height: 100%;

   @media (max-width: ${baseTheme.sizes.maxWidthContainer}) {
      flex: 0 1 50%;
   }
`

// ComponentProps
interface AuthImageProps {
   bgImgPath: string
}

export const AuthImage: FC<AuthImageProps> = (
   {
      children,
      bgImgPath
   }
   ) => {
    return (
        <StyledAuthImage>
            <AuthImageBg bgImgPath={bgImgPath}/>
            <AuthImageContainer>
               {children}
            </AuthImageContainer>
        </StyledAuthImage>
    );
};
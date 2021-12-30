import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme'

// StyledProps
interface StyledLogoProps {
   flex?: string,
   mRigth?: string
}

// Styled
const StyledLogoImage = styled.div<StyledLogoProps>`
   flex: ${props => props.flex || '0 0 7.5rem'};
   position: relative;
   margin-right: ${props => props.mRigth || '2rem'};

   @media (max-width: ${baseTheme.media.md2}) {
      flex: 0 0 6.5rem;
   }

   @media (max-width: ${baseTheme.media.md4}) {
      flex: 0 0 3.5rem;
      margin-right: 1rem;
   }
`

// ComponentProps
interface LogoImageProps {
   logoImgWeight?: string,
   logoImgMarginRigth?: string
}

export const LogoImage: FC<LogoImageProps> = (
   {
      logoImgWeight,
      logoImgMarginRigth,
      children
   }
   ) => {
   return (
      <StyledLogoImage flex={logoImgWeight} mRigth={logoImgMarginRigth}>
         {children}
      </StyledLogoImage>
   )
}
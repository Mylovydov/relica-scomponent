import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme'

import { LogoImage } from './LogoImage';
import { LogoIcon } from './LogoIcon';
import { LogoText } from './LogoText';

// StyledProps

// Styled
const StyledLogo = styled.div`
   display: flex;
   align-items: center;

   @media (max-width: ${baseTheme.media.md2}) {
      justify-content: center;
   }
`

// ComponentProps
interface LogoProps {
   textFontSize?: string,
   textWeight?: number,
   textMediaFontSize?: string,
   logoImgWeight?: string,
   logoImgMarginRigth?: string,
   imgPath: string
}


export const Logo: FC<LogoProps> = (
   {
      textFontSize,
      textWeight,
      textMediaFontSize,
      logoImgWeight,
      logoImgMarginRigth,
      imgPath
   }
) => {
   return (
      <StyledLogo>
         <LogoImage 
            logoImgWeight={logoImgWeight} 
            logoImgMarginRigth={logoImgMarginRigth}
         >
            <LogoIcon imgPath={imgPath}/>
         </LogoImage>

         <LogoText
            textFontSize={textFontSize}
            textWeight={textWeight}
            textMediaFontSize={textMediaFontSize}
            children={'Relica'}
         />
      </StyledLogo>
   );
};
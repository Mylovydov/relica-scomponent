import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../styles/theme'

import { LogoImage } from './LogoImage';
import { LogoIcon } from './LogoIcon';
import { LogoText } from './LogoText';

// StyledProps
interface StyledLogoProps {
   mediaMd2Justify?: string
}

// Styled
const StyledLogo = styled.div<StyledLogoProps>`
   display: flex;
   align-items: center;

   @media (max-width: ${baseTheme.media.md2}) {
      justify-content: ${props => props.mediaMd2Justify || 'center'};
   }
`

// ComponentProps
interface LogoProps {
   mediaMd2Justify?: string
   textFontSize?: string,
   textWeight?: number,
   textColor?: string,
   textMediaFontSize?: string,
   logoImgageFlex?: string,
   logoImgageMargin?: string,
   logoImgMd2Flex?: string,
   logoImgMd4Flex?: string,
   imgPath: string
}


export const Logo: FC<LogoProps> = (
   {
      mediaMd2Justify,
      textFontSize,
      textWeight,
      textMediaFontSize,
      textColor,
      logoImgageFlex,
      logoImgageMargin,
      logoImgMd2Flex,
      logoImgMd4Flex,
      imgPath
   }
) => {
   return (
      <StyledLogo mediaMd2Justify={mediaMd2Justify}>
         <LogoImage 
            flex={logoImgageFlex} 
            margin={logoImgageMargin}
            mediaMd2Flex={logoImgMd2Flex}
            mediaMd4Flex={logoImgMd4Flex}
         >
            <LogoIcon imgPath={imgPath}/>
         </LogoImage>

         <LogoText
            textFontSize={textFontSize}
            textWeight={textWeight}
            mediaMd4FontSize={textMediaFontSize}
            color={textColor}
            children={'Relica'}
         />
      </StyledLogo>
   );
};
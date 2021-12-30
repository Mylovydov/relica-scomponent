import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme'

// StyledProps
interface StyledTextProps {
   fontSize?: string,
   weigth?: number,
   mediaFontSize?: string
}

// Styled
const StyledLogoText = styled.div<StyledTextProps>`
   font-size: ${props => props.fontSize || '4.3rem'};
   line-height: calc((5.7rem / 4.3rem) * 100%);
   color: ${({theme, ...props}) => props.color || theme.colors.white};
   font-weight: ${props => props.weigth || 700};

   @media (max-width: ${baseTheme.media.md4}) {
      font-size: ${props => props.mediaFontSize || '2.5rem'};
   }
`

// ComponentProps
interface LogoTextProps {
   textFontSize?: string,
   textWeight?: number,
   textMediaFontSize?: string,
}

export const LogoText: FC<LogoTextProps> = (
   {
      textFontSize,
      textWeight,
      textMediaFontSize,
      children
   }
   ) => {
   return (
      <StyledLogoText
         fontSize={textFontSize}
         weigth={textWeight}
         mediaFontSize={textMediaFontSize}
      >
         {children}
      </StyledLogoText>
   )
}
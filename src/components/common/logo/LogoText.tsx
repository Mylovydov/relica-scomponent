import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme'

// StyledProps
interface StyledTextProps {
   fontSize?: string,
   weigth?: number,
   mediaMd4FontSize?: string,
   color?: string
}

// Styled
const StyledLogoText = styled.div<StyledTextProps>`
   font-size: ${props => props.fontSize || '4.3rem'};
   line-height: calc((5.7rem / 4.3rem) * 100%);
   color: ${({theme, ...props}) => props.color || theme.colors.white};
   font-weight: ${props => props.weigth || 700};

   @media (max-width: ${baseTheme.media.md4}) {
      font-size: ${props => props.mediaMd4FontSize || '2.5rem'};
   }
`

// ComponentProps
interface LogoTextProps {
   textFontSize?: string,
   textWeight?: number,
   mediaMd4FontSize?: string,
   color?: string
}

export const LogoText: FC<LogoTextProps> = (
   {
      textFontSize,
      textWeight,
      mediaMd4FontSize,
      color,
      children
   }
   ) => {
   return (
      <StyledLogoText
         fontSize={textFontSize}
         weigth={textWeight}
         mediaMd4FontSize={mediaMd4FontSize}
         color={color}
      >
         {children}
      </StyledLogoText>
   )
}
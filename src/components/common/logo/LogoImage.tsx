import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme'

// StyledProps
interface StyledLogoProps {
   flex?: string,
   margin?: string,
   mediaMd2Flex?: string,
   mediaMd4Flex?: string
}

// Styled
const StyledLogoImage = styled.div<StyledLogoProps>`
   flex: ${props => props.flex || '0 0 7.5rem'};
   position: relative;
   margin: ${({ margin }) => margin || '0 2rem 0 0'};

   @media (max-width: ${baseTheme.media.md2}) {
      flex: ${props => props.mediaMd2Flex || '0 0 6.5rem'};
   }

   @media (max-width: ${baseTheme.media.md4}) {
      flex: ${props => props.mediaMd4Flex || '0 0 3.5rem'};
      margin-right: 1rem;
   }
`

// ComponentProps
interface LogoImageProps {
   flex?: string,
   margin?: string,
   mediaMd2Flex?: string,
   mediaMd4Flex?: string
}

export const LogoImage: FC<LogoImageProps> = (
   {
      flex,
      margin,
      mediaMd2Flex,
      mediaMd4Flex,
      children
   }
   ) => {
   return (
      <StyledLogoImage
         flex={flex}
         margin={margin}
         mediaMd2Flex={mediaMd2Flex}
         mediaMd4Flex={mediaMd4Flex}
      >
         {children}
      </StyledLogoImage>
   )
}
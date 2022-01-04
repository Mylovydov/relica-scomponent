import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledAvatarProps {
   width?: string,
   heigth?: string,
   margin?: string
}

// Styled
const StyledAvatar = styled.div<StyledAvatarProps>`
   width: ${({ width }) => width || '5.6rem'};
   height: ${({ heigth }) => heigth || '5.6rem'};
   border-radius: 50%;
   overflow: hidden;
   position: relative;
   margin: ${({ margin }) => margin || '0'};

   img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      object-fit: cover;
   }
`
// ComponentProps
interface AvatarProps {
   width?: string,
   heigth?: string,
   margin?: string,
   imagePath: string,
   imageAlt?: string
}

export const Avatar: FC<AvatarProps> = ({ imagePath, imageAlt, ...props }) => {
   return (
      <StyledAvatar {...props}>
         <img src={imagePath} alt={imageAlt} />
      </StyledAvatar>
   );
};
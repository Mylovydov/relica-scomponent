import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledAvatarProps {
   imgSize?: string
   heigth?: string
   margin?: string
   border?: string
   brdrRadius?: string
   imgHeigth?: string
}

// Styled
const StyledAvatar = styled.div<StyledAvatarProps>`
   width: ${({ imgSize }) => imgSize || '5.6rem'};
   height: ${({ imgSize }) => imgSize || '5.6rem'};
   border-radius: ${({ brdrRadius = '50%'}) => brdrRadius};
   overflow: hidden;
   position: relative;
   margin: ${({ margin }) => margin || '0'};
   border: ${({ border = 'none'}) => border};

   img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${({ imgHeigth = '100%'}) => imgHeigth};
      z-index: 1;
      object-fit: cover;
   }
`
// ComponentProps
interface AvatarProps {
   imgSize?: string
   margin?: string
   imagePath?: string
   imageAlt?: string
   border?: string
   brdrRadius?: string
   imgHeigth?: string
}

export const Avatar: FC<AvatarProps> = ({ imagePath, imageAlt, ...props }) => {
   return (
      <StyledAvatar {...props}>
         <img src={imagePath} alt={imageAlt} />
      </StyledAvatar>
   );
};
import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
const StyledAuthImagePicture = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 1;
   object-fit: cover;
`
// Styled

// ComponentProps
interface AuthImagePictureProps {
   bgImgPath: string,
   bgImgAlt?: string
}

export const AuthImageBg: FC<AuthImagePictureProps> = (
   {
      bgImgPath,
      bgImgAlt
   }
) => {
   return (
      <>
         <StyledAuthImagePicture src={bgImgPath} alt={bgImgAlt}/>
      </>
   );
};
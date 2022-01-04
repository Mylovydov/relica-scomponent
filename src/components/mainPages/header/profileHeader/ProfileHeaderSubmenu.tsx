import React, { FC } from 'react';
import styled from 'styled-components';
// StyledProps
// Styled
const StyledProfileHeaderSubmenu = styled.div`
   position: absolute;
   top: 140%;
   right: .7rem;
   z-index: 5;

   /* opacity: 0; */
   /* visibility: hidden; */

   transition: all .2s ease-out;
   transform: translate(0px, -1rem);
`
// ComponentProps

export const ProfileHeaderSubmenu: FC = (props) => {
   return <StyledProfileHeaderSubmenu {...props}/>
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
// Styled
const StyledProfileHeader = styled.div`
   position: relative;
   z-index: 1;
   width: 4.5rem;
   height: 4.5rem;
   display: flex;
   align-items: center;
   justify-content: center;

   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: .2rem solid ${({ theme }) => theme.colors.primary};
      opacity: 0;

      transition: opacity .2s linear;
   }

   @media (any-hover: hover) {
      &:hover {
         &::before {
            opacity: 1;
         }

         /* .profile-header__submenu {
            opacity: 1;
            visibility: visible;
            transform: translate(0px, 0px);
         } */
      }
   }
`
// ComponentProps

export const ProfileHeader: FC = (props) => {
   return <StyledProfileHeader {...props}/>
};
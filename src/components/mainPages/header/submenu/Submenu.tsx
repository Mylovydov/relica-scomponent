import React, { FC } from 'react';
import styled from 'styled-components';
import { SubmenuBody } from './SubmenuBody';


// StyledProps
interface StyledSubmenuProps {
   minWidth?: string,
   bgColor?: string,
   brdRadius?: string
}

// Styled
const StyledSubmenu = styled.div<StyledSubmenuProps>`
   display: none;
   min-width: ${props => props.minWidth || '200px'};
   background-color: ${({ theme, ...props }) => props.bgColor || theme.colors.white};
   border-radius: ${props => props.brdRadius || '10px'};

   &::after {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      right: 13px;
      top: -6px;
      z-index: -1;

      background-color: ${({ theme }) => theme.colors.white};
      transform: rotate(45deg);

      border-radius: 3px;
   }

   &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: 10px;
      box-shadow: 0px 0px 10px #0000001A;
      z-index: -2;
   }
`
// ComponentProps

export const Submenu: FC = ({children}) => {
   return (
      <StyledSubmenu>
         <SubmenuBody>
            {children}
         </SubmenuBody>
      </StyledSubmenu>
   );
}
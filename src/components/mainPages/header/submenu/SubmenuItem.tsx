import React, { FC } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledSubtitle } from '../../../typography/Typography1';

// StyledProps
// Styled
const StyledSubmenuItem = styled.li`
   &:not(:last-child) {
      border-bottom: 1px solid rgba(#707070, .07);
   }

   a {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.black};
      padding: 20px 10px 20px 20px;
      display: block;
      transition: all .2s linear;

      @media (any-hover: hover) {
         &:hover {
            background-color: #F0F9FD;
         }
      }
   }
`
// ComponentProps
interface SubmenuItemProps {
   to: string
   children: string
}

export const SubmenuItem: FC<SubmenuItemProps> = ({to, children}) => {
   return (
      <StyledSubmenuItem>
         <Link to={to}>
            <StyledSubtitle weight={400}>
               {children}
            </StyledSubtitle>
            </Link>
      </StyledSubmenuItem>
   );
};
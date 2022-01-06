import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledHeaderProps {
   height?: string,
   bgColor?: string
}

// Styled
const StyledHeader = styled.header<StyledHeaderProps>`
   position: fixed;
   width: 100%;
   top: 0;
   height: ${({theme, ...props}) => props.height || theme.sizes.headerHeigth}rem;
   z-index: ${({ theme }) => theme.order.zIndexHeader};

   background-color: ${({ theme, ...props }) => props.bgColor || theme.colors.white};
   box-shadow: 0px .5rem 1.5rem #00000008;
`

// ComponentProps
interface HeaderProps {
   height?: string,
   bgColor?: string
}

export const Header: FC<HeaderProps> = ({height, bgColor, children}) => {
   return (
      <StyledHeader height={height} bgColor={bgColor}>
         {children}
      </StyledHeader>
   );
};
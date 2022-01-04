import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledSubmenuListProps {
   brdRadius?: string
}
// Styled
const StyledSubmenuList = styled.ul<StyledSubmenuListProps>`
   display: flex;
   flex-direction: column;
   border-radius: ${props => props.brdRadius || '1rem'};
   overflow: hidden;
`
// ComponentProps
interface SubmenuListProps {
   brdRadius?: string
}

export const SubmenuList: FC<SubmenuListProps> = (props) => {
   return <StyledSubmenuList {...props}/>
};
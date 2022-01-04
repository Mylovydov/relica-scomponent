import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledActionsHeaderIconsProps {
   maxWidth?: string
}
// Styled
const StyledActionsHeaderIcons = styled.div<StyledActionsHeaderIconsProps>`
   max-width: ${props => props.maxWidth || '13.2rem'};
   margin: 0 .5rem;
   flex: 1 1 auto;
`
// ComponentProps
interface ActionsHeaderIconsProps {
   maxWidth?: string
}

export const ActionsHeaderIcons: FC<ActionsHeaderIconsProps> = (props) => {
   return <StyledActionsHeaderIcons {...props}/>
};
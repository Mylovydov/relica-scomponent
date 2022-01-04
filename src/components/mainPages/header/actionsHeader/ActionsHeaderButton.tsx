import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledActionsHeaderButtonProps {
   flex?: string
}
// Styled
const StyledActionsHeaderButton = styled.div<StyledActionsHeaderButtonProps>`
   margin-right: .5rem;
   flex: ${props => props.flex || '0 0 18.5rem'};
`
// ComponentProps
interface ActionsHeaderButtonProps {
   flex?: string
}

export const ActionsHeaderButton: FC<ActionsHeaderButtonProps> = (props) => {
   return <StyledActionsHeaderButton {...props}/>
};
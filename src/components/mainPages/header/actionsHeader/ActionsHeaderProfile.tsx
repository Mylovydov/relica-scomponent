import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
// Styled
const StyledActionsHeaderProfile = styled.div`
   flex: 0 0 4.5rem;
   margin-left: .5rem;
`
// ComponentProps


export const ActionsHeaderProfile: FC = (props) => {
   return <StyledActionsHeaderProfile {...props}/>
};
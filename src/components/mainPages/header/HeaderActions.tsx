import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledHeaderActionsProps {
   flex?: string,
   margin?: string
}

// Styled
const StyledHeaderActions = styled.div<StyledHeaderActionsProps>`
   flex: ${({ flex }) => flex || '0 1 42rem'};
   margin: ${({ margin }) => margin || '0 0 0 0.5rem'};
`

// ComponentProps
interface HeaderActionprops {
   flex?: string,
   margin?: string
}

export const HeaderActions: FC<HeaderActionprops> = (props) => {
   return <StyledHeaderActions {...props}/>
};
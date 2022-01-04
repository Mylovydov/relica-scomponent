import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
// Styled
const StyledHeaderContainer = styled.div`
   height: 100%;
`
// ComponentProps

export const HeaderContainer: FC = (props) => {
   return <StyledHeaderContainer {...props}/>
};
import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
// Styled
const StyledContent = styled.main`
   flex: 1 1 auto;
   padding-top: ${({ theme }) => theme.sizes.headerHeigth};
`
// ComponentProps

export const Content: FC = (props) => {
   return <StyledContent {...props}/>;
};
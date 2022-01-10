import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledIncomeContent = styled.div`
   margin: 1.6rem 0 0 0;
`
// ComponentProps

export const IncomeContent: FC = (props) => {
   return <StyledIncomeContent {...props} />
};
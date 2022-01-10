import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledIncomeBody = styled.div`
   padding: 6rem 0 0 0;

   >h2 {
      margin: 0 0 1.5rem 0;
   }
`
// ComponentProps

export const IncomeBody: FC = (props) => {
   return <StyledIncomeBody {...props} />
};
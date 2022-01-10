import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTableHeaderBody = styled.div`
   display: flex;
   align-items: center;
   padding: 2.1rem 1.8rem;
`
// ComponentProps


export const TableHeaderBody: FC = (props) => {
   return <StyledTableHeaderBody {...props} />
};
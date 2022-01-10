import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTableHeaderItemBody = styled.div`
   display: flex;
   align-items: center;
`
// ComponentProps

export const TableHeaderItemBody:FC = (props) => {
   return <StyledTableHeaderItemBody {...props} />
};
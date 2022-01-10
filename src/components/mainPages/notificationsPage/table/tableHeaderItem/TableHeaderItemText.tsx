import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTableHeaderItemText = styled.div`
   flex: 1 1 auto;
`
// ComponentProps

export const TableHeaderItemText: FC = (props) => {
   return <StyledTableHeaderItemText {...props} />
};
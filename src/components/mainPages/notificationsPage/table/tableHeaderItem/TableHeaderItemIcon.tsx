import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTableHeaderItemIcon = styled.div`
   margin-right: 1rem;
   flex: 0 0 1.4rem;
`
// ComponentProps

export const TableHeaderItemIcon: FC = (props) => {
   return <StyledTableHeaderItemIcon {...props} />
};
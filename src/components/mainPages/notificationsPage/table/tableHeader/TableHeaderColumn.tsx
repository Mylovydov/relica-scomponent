import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTableHeaderColumn = styled.div`
   flex: 0 1 25%;
`
// ComponentProps


export const TableHeaderColumn: FC = (props) => {
   return <StyledTableHeaderColumn {...props} />
};
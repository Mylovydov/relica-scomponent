import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTableItemColumn = styled.div`
   flex: 0 1 25%;
`
// ComponentProps


export const TableItemColumn: FC = (props) => {
   return <StyledTableItemColumn {...props} />
};
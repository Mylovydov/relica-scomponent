import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTableHeader = styled.div`
   background-color: ${({ theme }) => theme.colors.categoryTableBgColor};
   border-radius: 1rem;
`
// ComponentProps


export const TableHeader: FC = (props) => {
   return <StyledTableHeader {...props} />
};
import React, { FC } from 'react';

import styled from 'styled-components';


// StyledProps

// Styled
const StyledTableItemBody = styled.div`
   display: flex;
   align-items: center;
   padding: 3.2rem 1.8rem;
   min-height: 12rem;
`
// ComponentProps


const TableItemBody: FC = (props) => {
   return <StyledTableItemBody {...props} />
};

export default TableItemBody;
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTotalItemBody = styled.div`
   display: flex;
   align-items: center;
   padding: 4rem 3rem;
`
// ComponentProps


export const TotalItemBody: FC = (props) => {
   return <StyledTotalItemBody {...props} />
};
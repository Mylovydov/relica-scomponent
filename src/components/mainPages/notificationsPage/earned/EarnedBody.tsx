import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEarnedBody = styled.div`
   display: flex;
   align-items: center;
   margin: 0 -.8rem;
   flex-wrap: wrap;
`
// ComponentProps


export const EarnedBody: FC = (props) => {
   return <StyledEarnedBody {...props} />
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
// Styled
const StyledEarnedColumn = styled.div`
   padding: 0 .8rem;
   flex: 0 1 33.33333%;
   min-width: 20rem;

   margin: .2rem 0;
`

// ComponentProps


export const EarnedColumn: FC = (props) => {
   return <StyledEarnedColumn {...props} />
};
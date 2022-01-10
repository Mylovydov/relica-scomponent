import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTotalItemText = styled.div`
   flex: 1 1 auto;
`
// ComponentProps


export const TotalItemText: FC = (props) => {
   return <StyledTotalItemText {...props} />
};
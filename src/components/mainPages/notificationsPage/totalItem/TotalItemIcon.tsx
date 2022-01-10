import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTotalItemIcon = styled.div`
   flex: 0 0 6rem;
   margin-right: 1.2rem;
`
// ComponentProps


export const TotalItemIcon: FC = (props) => {
   return <StyledTotalItemIcon {...props} />
};
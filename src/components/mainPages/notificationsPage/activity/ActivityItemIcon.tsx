import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledActivityItemIcon = styled.div`
    flex: 0 0 2.6rem;
    margin-right: 2rem;
`
// ComponentProps


export const ActivityItemIcon: FC = (props) => {
    return <StyledActivityItemIcon {...props} />
};
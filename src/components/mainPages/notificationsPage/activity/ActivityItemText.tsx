import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledActivityItemText = styled.div`
    flex: 1 1 auto;
`
// ComponentProps


export const ActivityItemText: FC = (props) => {
    return <StyledActivityItemText {...props} />
};
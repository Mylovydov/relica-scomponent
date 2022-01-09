import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledActivityItemBody = styled.div`
    display: flex;
    align-items: center;
    padding: 1.6rem 0 1.6rem 1.6rem;
`
// ComponentProps

export const ActivityItemBody: FC = (props) => {
    return <StyledActivityItemBody {...props} />
};
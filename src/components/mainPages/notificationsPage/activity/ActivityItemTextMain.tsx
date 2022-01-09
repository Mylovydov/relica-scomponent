import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledActivityItemTextMain = styled.div`
    display: flex;
    align-items: center;

    margin: 0 0 .5rem 0;

    span {
        margin: 0 1rem 0 0;
    }

    p {
        width: 100%;
    }
`
// ComponentProps
export const ActivityItemTextMain: FC = (props) => {
    return <StyledActivityItemTextMain {...props} />
};
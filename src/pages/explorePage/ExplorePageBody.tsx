import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledExplorePageBody = styled.div`
    padding: 6rem 0 20rem;

    >h1 {
        text-align: center;
    }
`
// ComponentProps

export const ExplorePageBody: FC = (props) => {
    return <StyledExplorePageBody {...props}/>
};
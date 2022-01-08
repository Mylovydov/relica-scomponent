import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPostImageStatistics = styled.div`
    position: absolute;
    top: 50%;
    left: 43%;
    z-index: 4;
    opacity: 0;
    pointer-events: none;
    transition: opacity .2s linear;

    transform: translate3d(-50%, -50%, 0);
`
// ComponentProps

export const PostImageStatistics: FC = (props) => {
    return <StyledPostImageStatistics {...props}/>
};
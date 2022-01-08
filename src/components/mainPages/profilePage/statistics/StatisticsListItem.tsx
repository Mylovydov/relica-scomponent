import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
// Styled
const StyledStatisticsListItem = styled.li`
    text-align: center;
    margin: .3rem 4rem;

    span {
        margin: .5rem 0 0 0;
        display: block;
    }
`
// ComponentProps


export const StatisticsListItem: FC = (props) => {
    return <StyledStatisticsListItem {...props}/>
};
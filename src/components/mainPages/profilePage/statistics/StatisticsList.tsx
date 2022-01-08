import React, { FC } from 'react';

import styled from 'styled-components';
import { StatisticsListItem } from './StatisticsListItem';

// StyledProps
// Styled
const StyledStatisticsList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 60rem;
    margin: 0 auto;
`

// ComponentProps

export const StatisticsList: FC = (props) => {
    return <StyledStatisticsList {...props}/>
};
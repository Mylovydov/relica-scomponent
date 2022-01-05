import React, { FC } from 'react';

import styled from 'styled-components';
import { PostStatistics } from '../../../common/postStatistics/PostStatistics';

// StyledProps
interface StyledCountListItemProps {
    margin?: string
}
// Styled
const StyledCountListItem = styled.li<StyledCountListItemProps>`
    &:not(:last-child) {
        margin: ${({ margin }) => margin || '0 3.5rem 0 0'};
    }
`

// ComponentProps
interface CountListItemProps {
    margin?: string
}

export const CountListItem: FC<CountListItemProps> = ({ children, ...props }) => {
    return (
        <StyledCountListItem {...props}>
            {children}
        </StyledCountListItem>
    );
};
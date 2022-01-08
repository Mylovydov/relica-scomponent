import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledCountListItemProps {
    margin?: string
}
// Styled
const StyledCountListItem = styled.li<StyledCountListItemProps>`
    &:not(:last-child) {
        margin: ${({ margin = '0 5rem 0 0'}) => margin};
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
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledMessagePrewievUnreadCountProps {
    countBgColor?: string
    countPadding?: string
}

// Styled
const StyledMessagePrewievUnreadCount = styled.div<StyledMessagePrewievUnreadCountProps>`
    flex: 0 1 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 400;
        line-height: 130%;
        padding: ${({ countPadding ='.35em .7em'}) => countPadding};
        border-radius: .76em;
        background-color: ${({ theme, ...props }) => props.countBgColor || theme.colors.primary};
    }
`
// ComponentProps

export const MessagePrewievUnreadCount: FC = ({ children }) => {
    return (
        <StyledMessagePrewievUnreadCount>
            {children}
        </StyledMessagePrewievUnreadCount>
    );
};
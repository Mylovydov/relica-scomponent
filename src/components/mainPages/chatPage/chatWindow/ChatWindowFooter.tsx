import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledChatWindowFooter = styled.div`
    border-top: .1rem solid ${({ theme }) => theme.colors.chatBorder};

    flex: 0 0 8rem;
`

// ComponentProps

export const ChatWindowFooter: FC = ({ children }) => {
    return (
        <StyledChatWindowFooter>
            {children}
        </StyledChatWindowFooter>
    );
};


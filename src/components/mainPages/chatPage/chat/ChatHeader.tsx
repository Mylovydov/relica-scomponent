import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledChatHeader = styled.div`
    flex: 0 0 8rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

// ComponentProps

export const ChatHeader: FC = ({ children }) => {
    return (
        <StyledChatHeader>
            {children}
        </StyledChatHeader>
    );
};
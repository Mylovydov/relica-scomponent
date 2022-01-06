import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledChatWindowBody = styled.div`
    padding: 4rem 1.5rem 3rem 3rem;
    flex: 1 1 auto;
`

// ComponentProps

export const ChatWindowContent: FC = ({ children }) => {
    return (
        <StyledChatWindowBody>
            {children}
        </StyledChatWindowBody>
    );
};
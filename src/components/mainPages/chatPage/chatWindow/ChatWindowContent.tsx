import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledChatWindowContent = styled.div`
    flex: 1 1 auto;
    padding: 4rem 0 0 0;
`

// ComponentProps

export const ChatWindowContent: FC = ({ children }) => {
    return (
        <StyledChatWindowContent>
            {children}
        </StyledChatWindowContent>
    );
};
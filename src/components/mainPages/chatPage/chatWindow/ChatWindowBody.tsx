import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledChatWindowBody = styled.div`
    display: flex;
    flex-direction:column;
    height: 100%;
`

// ComponentProps
export const ChatWindowBody: FC = ({ children }) => {
    return (
        <StyledChatWindowBody>
            {children}
        </StyledChatWindowBody>
    );
};
import React, { FC } from 'react';
import styled from 'styled-components';
import { ChatWindowBody } from './ChatWindowBody';

// StyledProps

// Styled
const StyledChatWindow = styled.div`
    height: 100%;
`
// ComponentProps

export const ChatWindow: FC = ({ children }) => {
    return (
        <StyledChatWindow>
            {children}
        </StyledChatWindow>
    );
};
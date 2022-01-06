import React, { FC } from 'react';
import { ChatWindowBody } from './ChatWindowBody';

// StyledProps

// Styled

// ComponentProps

export const ChatWindow: FC = ({ children }) => {
    return (
        <div>
            <ChatWindowBody>
                {children}
            </ChatWindowBody>

        </div>
    );
};
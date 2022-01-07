import React, { FC } from 'react';

import styled from 'styled-components';
import { MessageItem } from '../messageItem/MessageItem';

// StyledProps

// Styled
const StyledСurrentСommunicationMessageItem = styled.li`
    &:not(:first-child) {
        margin-top: 5rem;
    }
`

// ComponentProps
interface СurrentСommunicationMessageItemProps {
    message: string
    sendingTime: string
    selfMessage: boolean
    userPhoto?: string
}

export const СurrentСommunicationMessageItem: FC<СurrentСommunicationMessageItemProps> = (
    {
        message,
        sendingTime,
        selfMessage,
        userPhoto
    }
) => {
    return (
        <StyledСurrentСommunicationMessageItem>
            <MessageItem
                sendingTime={sendingTime}
                userMessage={message}
                selfMessage={selfMessage}
                userPhoto={userPhoto}
            />
        </StyledСurrentСommunicationMessageItem>
    );
};
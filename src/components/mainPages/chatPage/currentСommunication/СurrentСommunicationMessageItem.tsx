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

export const СurrentСommunicationMessageItem: FC = () => {
    return (
        <StyledСurrentСommunicationMessageItem>
            <MessageItem
                sendingTime='7:12am'
            />
        </StyledСurrentСommunicationMessageItem>
    );
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledChatBody = styled.div`
    flex: 1 1 auto;
    border-top: .1rem solid ${({ theme }) => theme.colors.chatBorder};
`

// ComponentProps

export const ChatBody: FC = ({ children }) => {
    return (
        <StyledChatBody>
            {children}
        </StyledChatBody>
    );
};
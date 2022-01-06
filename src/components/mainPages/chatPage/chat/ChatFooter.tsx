import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled

const StyledChatFooter = styled.div`
    flex: 0 0 8rem;
`

// ComponentProps

export const ChatFooter: FC = ({ children }) => {
    return (
        <StyledChatFooter>
            {children}
        </StyledChatFooter>
    );
}
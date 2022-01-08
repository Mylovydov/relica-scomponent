import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledSendMessageSendMessage = styled.div`
    flex: 1 1 auto;
    position: relative;
`
// ComponentProps

export const SendMessageinput: FC = ({ children }) => {
    return (
        <StyledSendMessageSendMessage>
            {children}
        </StyledSendMessageSendMessage>
    );
};
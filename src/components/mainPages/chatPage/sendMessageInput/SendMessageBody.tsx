import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
// Styled
const StyledSendMessageBody = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem 1.5rem 2rem 3rem;
`

// ComponentProps

export const SendMessageBody: FC = ({ children }) => {
    return (
        <StyledSendMessageBody>
            {children}
        </StyledSendMessageBody>
    );
};
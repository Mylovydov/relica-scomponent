import React, { FC } from 'react';

import styled from 'styled-components';
;

// StyledProps

// Styled
const StyledChat = styled.div`
    display: flex;
    flex-direction: column;
    border-right: .1rem solid ${({ theme }) => theme.colors.chatBorder};
`

// ComponentProps

export const Chat: FC = ({ children }) => {
    return (
        <StyledChat>
            {children}
        </StyledChat>
    );
};
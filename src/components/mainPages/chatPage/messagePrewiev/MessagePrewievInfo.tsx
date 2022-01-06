import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledMessagePrewievInfo = styled.div`
    flex: 1 1 auto;

    p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 20rem;
    }
`
// ComponentProps

export const MessagePrewievInfo: FC = ({ children }) => {
    return (
        <StyledMessagePrewievInfo>
            {children}
        </StyledMessagePrewievInfo>
    );
};
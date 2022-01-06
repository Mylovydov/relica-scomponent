import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledСurrentСommunicationTalk = styled.div`
    margin-top: 1.5rem;
`

// ComponentProps
export const СurrentСommunicationTalk: FC = ({ children }) => {
    return (
        <StyledСurrentСommunicationTalk>
            {children}
        </StyledСurrentСommunicationTalk>
    );
};
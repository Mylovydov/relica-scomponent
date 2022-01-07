import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';

// StyledProps

// Styled
const StyledСurrentСommunicationTalk = styled.div`
    margin-top: 1.5rem;
    flex: 1 1 auto;
    max-height: calc(100vh - (${baseTheme.sizes.headerHeigth}rem + 8rem + 4rem + 2rem + 1.5rem + 8.2rem));
    overflow-y: auto;
    overflow-x: hidden;
`

// ComponentProps
export const СurrentСommunicationTalk: FC = ({ children }) => {
    return (
        <StyledСurrentСommunicationTalk>
            {children}
        </StyledСurrentСommunicationTalk>
    );
};
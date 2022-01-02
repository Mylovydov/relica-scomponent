import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledAuthCardContent = styled.div`
    span {
        margin: 1rem 0 7rem 0;
        display: block;
    }

    button {
        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }
    }
`

// ComponentProps

export const AuthCardContent: FC = ({ children }) => {
    return (
        <StyledAuthCardContent>
            {children}
        </StyledAuthCardContent>
    );
};
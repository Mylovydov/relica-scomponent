import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledAuthCardContent = styled.div`
    a {
        /* display: block; */
        
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
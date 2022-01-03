import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps

// Styled
const StyledWelcomePageBody = styled.div`
    span {
        margin: 1rem 0 7rem 0;
        display: block;
    }
`

// ComponentProps


export const WelcomePageBody: FC = ({ children }) => {
    return (
        <StyledWelcomePageBody>
            {children}
        </StyledWelcomePageBody>
    );
};
import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps

// Styled
const StyledWelcomePageBody = styled.div`

`

// ComponentProps


export const WelcomePageBody: FC = ({ children }) => {
    return (
        <StyledWelcomePageBody>
            {children}
        </StyledWelcomePageBody>
    );
};
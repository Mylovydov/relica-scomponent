import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledAuthCardFooter = styled.div`

`

// ComponentProps


export const AuthCardFooter: FC = ({ children }) => {
    return (
        <StyledAuthCardFooter>
            {children}
        </StyledAuthCardFooter>
    );
};
import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledAuthCardFooterProps {
    mTop?: string
}

// Styled
const StyledAuthCardFooter = styled.div<StyledAuthCardFooterProps>`
    margin-top: ${props => props.mTop || '1.6rem'};
`

// ComponentProps
interface AuthCardFooterProps {
    mTop?: string
}

export const AuthCardFooter: FC<AuthCardFooterProps> = ({ mTop, children }) => {
    return (
        <StyledAuthCardFooter mTop={mTop}>
            {children}
        </StyledAuthCardFooter>
    );
};
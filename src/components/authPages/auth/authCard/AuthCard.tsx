import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledAuthCardProps {
    minWidth?: string
}

// Styled
const StyledAuthCard = styled.div<StyledAuthCardProps>`
    min-width: ${props => props.minWidth || '100%'};
`

// ComponentProps
interface AuthCardProps {
    minWidth?: string
}

export const AuthCard: FC<AuthCardProps> = ({minWidth, children}) => {
    return (
        <StyledAuthCard minWidth={minWidth}>
            {children}
        </StyledAuthCard>
    );
};
import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledAuthCardHeaderProps {
    mBottom?: string
}
// Styled
const StyledAuthCardHeader= styled.div<StyledAuthCardHeaderProps>`
    margin-bottom: ${props => props.mBottom || '4.5rem'};
`

// ComponentProps
interface AuthCardHeaderProps {
    mBottom?: string
}

export const AuthCardHeader: FC<AuthCardHeaderProps> = (
    {
        mBottom,
        children
    }
    ) => {
    return (
        <StyledAuthCardHeader mBottom={mBottom}>
            {children}
        </StyledAuthCardHeader>
    );
};
import React, { FC } from 'react';
import styled from 'styled-components';

import { AuthActionContainer } from './AuthActionContainer';
import { AuthActionBody } from './AuthActionBody';

// StyledProps

// Styled
const StyledAuthAction = styled.div`
   flex: 1 1 auto;
`

// ComponentProps
interface AuthActionProps {

}

export const AuthAction: FC<AuthActionProps> = ({ children }) => {
    return (
        <StyledAuthAction>
            <AuthActionContainer>
                <AuthActionBody>
                    {children}
                </AuthActionBody>
            </AuthActionContainer>
        </StyledAuthAction>
    );
};
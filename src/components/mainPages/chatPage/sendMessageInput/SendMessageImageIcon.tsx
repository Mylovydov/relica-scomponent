import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledSendMessageImageIcon = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2rem;
        height: 2rem;
        transform: translate3d(-50%,-50%,0);
        z-index: 1;
`
// ComponentProps

export const SendMessageImageIcon: FC = ({ children }) => {
    return (
        <StyledSendMessageImageIcon>
            {children}
        </StyledSendMessageImageIcon>
    );
};
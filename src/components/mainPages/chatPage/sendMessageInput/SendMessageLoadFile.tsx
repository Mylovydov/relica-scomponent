import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledSendMessageLoadFile = styled.div`
    flex: 0 0 4.4rem;
    margin-right: 1rem;
`
// ComponentProps

export const SendMessageLoadFile: FC = ({ children }) => {
    return (
        <StyledSendMessageLoadFile>
            {children}
        </StyledSendMessageLoadFile>
    );
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledMessagePrewiev = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`
// ComponentProps


export const MessagePrewiev: FC = ({ children }) => {
    return (
        <StyledMessagePrewiev>
            {children}
        </StyledMessagePrewiev>
    );
};
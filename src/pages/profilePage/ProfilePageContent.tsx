import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledProfilePageContent = styled.div`
    position: relative;
    z-index: 2;
    margin-top: -11rem;
    padding-bottom: 35rem;
`
// ComponentProps

export const ProfilePageContent: FC = ({ children }) => {
    return (
        <StyledProfilePageContent>
            {children}
        </StyledProfilePageContent>
    );
};
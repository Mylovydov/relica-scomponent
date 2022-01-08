import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
// Styled
const StyledProfilePageHeader = styled.div`
    position: relative;
    z-index: 1;
`

// ComponentProps


export const ProfilePageHeader: FC = ({ children }) => {
    return (
        <StyledProfilePageHeader>
            {children}
        </StyledProfilePageHeader>
    );
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledTabsControll = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.tabsControlBrdr};
    margin-bottom: 1.5rem;
`
// ComponentProps

export const TabsControll: FC = ({ children }) => {
    return (
        <StyledTabsControll>
            {children}
        </StyledTabsControll>
    );
};
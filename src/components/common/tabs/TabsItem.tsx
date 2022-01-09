import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledTabsItem = styled.div`
    transition: all .8s linear;
`
// ComponentProps
export const TabsItem: FC = (props) => {
    return <StyledTabsItem {...props} />
};


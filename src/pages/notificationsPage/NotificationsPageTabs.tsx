import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledNotificationsPageTabs = styled.div`
    margin: 1.5rem 0 0 0;
`
// ComponentProps

export const NotificationsPageTabs: FC = (props) => {
    return <StyledNotificationsPageTabs {...props} />
};
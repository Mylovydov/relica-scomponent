import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledNotificationsPageBody = styled.div`
    padding: 6rem 0 13rem;

    >h1 {
        text-align: center;
    }
`
// ComponentProps

export const NotificationsPageBody: FC = (props) => {
    return <StyledNotificationsPageBody {...props} />
};


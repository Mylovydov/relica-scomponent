import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledUserInfoAvatar = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    position: absolute;
    top: -10rem;
    left: 50%;

    transform: translateX(-50%);

    margin: 0 0 0.5rem 0;
`

// ComponentProps

export const UserInfoAvatar: FC = (props) => {
    return <StyledUserInfoAvatar {...props}/>
};
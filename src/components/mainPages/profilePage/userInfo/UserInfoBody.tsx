import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledUserInfoBody = styled.div`
    box-shadow: 0px 3px 10px #0000001A;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 8rem 2rem 3rem 2rem;
    position: relative;
    z-index: 5;
`
// ComponentProps

export const UserInfoBody: FC = (props) => {
    return <StyledUserInfoBody {...props}/>
};
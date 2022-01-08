import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledSendMessageInputBtn = styled.div`
    position: absolute;
    bottom: .4rem;
    right: .5rem;
    width: 3.4rem;
    height: 3.4rem;
    z-index: 3;
    background: url('/assets/icons/telegram.svg');
    background-size: 3.4rem 3.4rem;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    opacity: 1;
    cursor: pointer;

    transition: opacity .2s linear;
`
// ComponentProps

export const SendMessageInputBtn: FC = () => {
    return <StyledSendMessageInputBtn />
};
import React, { FC } from 'react';
import styled from 'styled-components';

import { styledInput } from '../../../common/form/inputItem/InputItem';

// StyledProps
// Styled
const StyledSendMessageInput = styled.input`
    ${styledInput}

    background-color: ${({ theme }) => theme.colors.chatInput};
    height: 4.4rem;
    border-radius: 2rem;
    resize: none;
    padding: .75em 3em .75em 1.25em;
    border-bottom: 0;
`
// ComponentProps

export const SendMessageInputItem: FC = (props) => {
    return <StyledSendMessageInput {...props}/>
};
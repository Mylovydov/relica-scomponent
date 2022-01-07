import React, { FC } from 'react';

import styled from 'styled-components';

import { СurrentСommunicationMessageItem } from './СurrentСommunicationMessageItem'
import { message } from '../../../../containers/ChatWindowContainer'

// StyledProps

// Styled
const StyledСurrentСommunicationMessageList = styled.ul`
    padding: 0 1.5rem 3rem;
`

// ComponentProps
interface СurrentСommunicationMessageListProps {
    data: message[]
}

export const СurrentСommunicationMessageList: FC<СurrentСommunicationMessageListProps> = ({ data }) => {

    const messages = data.map((message, i) => {
        return <СurrentСommunicationMessageItem {...message} key={i}/>
    })

    return (
        <StyledСurrentСommunicationMessageList>
            {messages}
        </StyledСurrentСommunicationMessageList>
    );
};
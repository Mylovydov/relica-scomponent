import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';
import { StyledCaptionText } from '../../../typography/Typography1';

// StyledProps

// Styled
const StyledMessageItem = styled.div`
    display: flex;
    justify-content: flex-end;
`
// ComponentProps
interface MessageItemProps {
    sendingTime: string
}

export const MessageItem: FC<MessageItemProps> = (
    {
        sendingTime,

    }
) => {
    return (
        <StyledMessageItem>
            <StyledCaptionText color={baseTheme.colors.black}>
{sendingTime}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            </StyledCaptionText>
        </StyledMessageItem>
    );
};
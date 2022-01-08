import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';
import { Avatar } from '../../../common/avatar/Avatar';
import { StyledBodyText, StyledCaptionText } from '../../../typography/Typography1';

// StyledProps
interface StyledMessageItemProps {
    margin?: string
    selfMessage: boolean
}

// Styled
const StyledMessageItem = styled.div<StyledMessageItemProps>`
    display: flex;
    justify-content: ${({ selfMessage }) => selfMessage ? 'flex-end' : ''};

    span {
        align-self: end;
        margin: ${({ margin = '0 1rem 0 0'}) => margin};
        order: ${({ selfMessage }) => selfMessage ? 1 : 2};
    }

    p {
        background-color: ${({ theme, selfMessage }) => selfMessage ? theme.colors.primary  : theme.colors.chatMessageBg};
        border-radius: ${({ selfMessage }) => selfMessage ? '1.25em 1.25em .25em 1.25em' : '1.25em 1.25em 1.25em .25em'};

        padding: .65em 1.2em;
        max-width: 40rem;
        order: ${({ selfMessage }) => selfMessage ? 2 : 1};
    }
`

// ComponentProps
interface MessageItemProps {
    sendingTime: string
    userMessage: string
    selfMessage: boolean
    userPhoto?: string
}

export const MessageItem: FC<MessageItemProps> = (
    {
        sendingTime,
        userMessage,
        selfMessage,
        userPhoto
    }
) => {
    return (
        <StyledMessageItem selfMessage={selfMessage}>

            {!selfMessage && 
                <Avatar
                    imagePath={userPhoto}
                    imgSize='4rem'
                    margin={'0 1.5rem 0 0'}
                />
            }

            <StyledCaptionText
                color={baseTheme.colors.secondary}
                fontSize={'1.1rem'}
                md2FontSize={'1.1rem'}
                md3FontSize={'1.1rem'}
                md4FontSize={'1.1rem'}
            >
                {sendingTime}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            </StyledCaptionText>

            <StyledBodyText
                color={selfMessage ? baseTheme.colors.white : baseTheme.colors.black}
            >
                {userMessage}
            </StyledBodyText>
        </StyledMessageItem>
    );
};
import React, { FC } from 'react';

import styled from 'styled-components';
import { Persone } from '../../../common/persone/Persone';
import { MessagePrewiev } from '../messagePrewiev/MessagePrewiev';
import { MessagePrewievInfo } from '../messagePrewiev/MessagePrewievInfo';
import { MessagePrewievUnreadCount } from '../messagePrewiev/MessagePrewievUnreadCount';

// StyledProps


// Styled
const StyledContactsListItem = styled.li`
    padding: 2.5rem 1.6rem;
    position: relative;
    transition: all .2s linear;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: block;
        width: .2rem;
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 0;
        transition: opacity .2s linear;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.chatContactsHover};

        &:before {
            opacity: 1;
        }
    }
`

// ComponentProps
interface ContactsListItemProps {
    avatarPath: string,
    messageAuthorName: string,
    message: string,
    unreadMessages?: string
}


export const ContactsListItem: FC<ContactsListItemProps> = (
    {
        avatarPath,
        messageAuthorName,
        message,
        unreadMessages
    }
    ) => {
    return (
        <StyledContactsListItem>
            <MessagePrewiev>
                <MessagePrewievInfo>
                    <Persone
                        imagePath={avatarPath}
                        personeName={messageAuthorName}
                        nameFontSize={'2rem'}
                        nameWeight={'500'}
                        personeSubtitleText={message}
                        subMargin={'.6rem 0 0 0'}
                    />
                </MessagePrewievInfo>

                {unreadMessages && 
                    <MessagePrewievUnreadCount>
                        <span>{unreadMessages}</span>
                    </MessagePrewievUnreadCount>
                }
                
            </MessagePrewiev>
        </StyledContactsListItem>
    );
};
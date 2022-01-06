import React, { FC } from 'react';

import { Chat } from '../components/mainPages/chatPage/chat/Chat'; 
import { ChatHeader } from '../components/mainPages/chatPage/chat/ChatHeader';
import { ChatBody } from '../components/mainPages/chatPage/chat/ChatBody';
import { Persone } from '../components/common/persone/Persone';
import { ChatWindowContainer } from './ChatWindowContainer';


export const ActiveChatContainer: FC = () => {
    return (
        <Chat>
            <ChatHeader>
                <Persone
                    imagePath='/assets/chat-avatar/chat-avatar-1.webp'
                    personeName='Layla Brown'
                    nameFontSize={'2rem'}
                    nameMd2FontSize={'2rem'}
                    nameMd3FontSize={'2rem'}
                    nameMd4FontSize={'2rem'}
                    nameWeight={'500'}
                    imgSize={'4rem'}
                />
            </ChatHeader>

            <ChatBody>
                <ChatWindowContainer />
            </ChatBody>
        </Chat>
    );
};
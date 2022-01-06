import React, { FC } from 'react';

import { ChatWindow } from '../components/mainPages/chatPage/chatWindow/ChatWindow';
import { ChatWindowContent } from '../components/mainPages/chatPage/chatWindow/ChatWindowContent';
import { ChatWindowFooter } from '../components/mainPages/chatPage/chatWindow/ChatWindowFooter';
import { СurrentСommunication } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunication'
import { СurrentСommunicationDate } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationDate'
import { СurrentСommunicationTalk } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationTalk'
import { СurrentСommunicationMessageList } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationMessageList'


export const ChatWindowContainer: FC = () => {
    return (
        <ChatWindow>
            <ChatWindowContent>

                <СurrentСommunication>
                    <СurrentСommunicationDate
                        currentDate={'Thursday, 12 Mar 2020'}
                    />
                    
                    <СurrentСommunicationTalk>
                        <СurrentСommunicationMessageList />
                    </СurrentСommunicationTalk>
                </СurrentСommunication>

            </ChatWindowContent>


            <ChatWindowFooter>

            </ChatWindowFooter>
        </ChatWindow>
    );
};
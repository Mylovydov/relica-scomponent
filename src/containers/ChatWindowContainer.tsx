import React, { FC } from 'react';

import { ChatWindow } from '../components/mainPages/chatPage/chatWindow/ChatWindow';
import { ChatWindowContent } from '../components/mainPages/chatPage/chatWindow/ChatWindowContent';
import { ChatWindowFooter } from '../components/mainPages/chatPage/chatWindow/ChatWindowFooter';
import { СurrentСommunication } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunication'
import { СurrentСommunicationDate } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationDate'
import { СurrentСommunicationTalk } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationTalk'
import { СurrentСommunicationMessageList } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationMessageList'
import { ChatWindowBody } from '../components/mainPages/chatPage/chatWindow/ChatWindowBody';

const messagesData = [
    {message: 'It was nice meeting you!', sendingTime: '5:12am', selfMessage: true},
    {message: 'dfbdfbd dbfdfbdb dbdbdb!', sendingTime: '7:45am', selfMessage: false, userPhoto: '/assets/chat-avatar/chat-avatar-1.webp'},
    {message: 'bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb! bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!', sendingTime: '3:12am', selfMessage: true},
    {message: 'dbdbdbdb dbdbdbdb dbdbgngng!', sendingTime: '7:12am', selfMessage: true},
    {message: 'bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb! bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!', sendingTime: '3:12am', selfMessage: true},
    {message: 'dfbdfbd dbfdfbdb dbdbdb!', sendingTime: '7:45am', selfMessage: false, userPhoto: '/assets/chat-avatar/chat-avatar-1.webp'},
    {message: 'bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb! bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!bdbdbdb dbdbdbdb dbdbdbdb dbdbdbdbdb dbdb!', sendingTime: '3:12am', selfMessage: true},
    {message: 'dfbdfbd dbfdfbdb dbdbdb!', sendingTime: '7:45am', selfMessage: false, userPhoto: '/assets/chat-avatar/chat-avatar-1.webp'},

]

export type message = {message: string, sendingTime: string, selfMessage: boolean, userPhoto?: string}

export const ChatWindowContainer: FC = () => {
    return (
        <ChatWindow>
            <ChatWindowBody>

                <ChatWindowContent>
                    <СurrentСommunication>
                        <СurrentСommunicationDate
                            currentDate={'Thursday, 12 Mar 2020'}
                        />
                        
                        <СurrentСommunicationTalk>
                            <СurrentСommunicationMessageList data={messagesData}/>
                        </СurrentСommunicationTalk>
                    </СurrentСommunication>

                </ChatWindowContent>


                <ChatWindowFooter>

                </ChatWindowFooter>
                
            </ChatWindowBody>
        </ChatWindow>
    );
};
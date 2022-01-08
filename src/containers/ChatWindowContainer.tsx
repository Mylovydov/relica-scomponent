import React, { FC } from 'react';

import { ChatWindow } from '../components/mainPages/chatPage/chatWindow/ChatWindow';
import { ChatWindowContent } from '../components/mainPages/chatPage/chatWindow/ChatWindowContent';
import { ChatWindowFooter } from '../components/mainPages/chatPage/chatWindow/ChatWindowFooter';
import { СurrentСommunication } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunication'
import { СurrentСommunicationDate } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationDate'
import { СurrentСommunicationTalk } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationTalk'
import { СurrentСommunicationMessageList } from '../components/mainPages/chatPage/currentСommunication/СurrentСommunicationMessageList'
import { ChatWindowBody } from '../components/mainPages/chatPage/chatWindow/ChatWindowBody';
import { SendMessage } from '../components/mainPages/chatPage/sendMessageInput/SendMessage';
import { SendMessageBody } from '../components/mainPages/chatPage/sendMessageInput/SendMessageBody';
import { Form } from '../components/common/form/Form';
import { FileInput } from '../components/common/form/fileItem/FileInput';
import { FormGroup } from '../components/common/form/FormGroup';
import { FileLabel } from '../components/common/form/fileItem/FileLabel';
import { Avatar } from '../components/common/avatar/Avatar';
import { baseTheme } from '../styles/theme';
import { SendMessageImageIcon } from '../components/mainPages/chatPage/sendMessageInput/SendMessageImageIcon';
import {SendMessageInputItem} from '../components/mainPages/chatPage/sendMessageInput/SendMessageInput';
import { SendMessageLoadFile } from '../components/mainPages/chatPage/sendMessageInput/SendMessageLoadFile';
import { SendMessageinput } from '../components/mainPages/chatPage/sendMessageInput/SendMessageSendMessage';
import { SendMessageInputBtn } from '../components/mainPages/chatPage/sendMessageInput/SendMessageInputBtn';

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
                    <SendMessage>
                        <Form action='/'>
                            <SendMessageBody>
                                <SendMessageLoadFile>
                                    <FormGroup>
                                        <FileInput fileInputId={'loadImage'}/>
                                            <FileLabel
                                                htmlFor='loadImage'
                                                height={'4.4rem'}
                                                width={'4.4rem'}
                                                border={'none'}
                                                hoverBorder={'none'}
                                                brdRadius='50%'
                                                bgColor={baseTheme.colors.chatInput}
                                                mediaMd4Height={'4.4rem'}
                                            >
                                                <SendMessageImageIcon>
                                                    <Avatar
                                                        imagePath='/assets/icons/piscture.svg'
                                                        imgSize={'2rem'}
                                                    />
                                                </SendMessageImageIcon>
                                            </FileLabel>
                                    </FormGroup>
                                </SendMessageLoadFile>

                                <SendMessageinput>
                                    <SendMessageInputItem/>
                                    <SendMessageInputBtn/>
                                </SendMessageinput>

                            </SendMessageBody>
                        </Form>
                    </SendMessage>
                </ChatWindowFooter>
                
            </ChatWindowBody>
        </ChatWindow>
    );
};
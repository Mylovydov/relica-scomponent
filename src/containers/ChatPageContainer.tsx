import React, { FC } from 'react';

import { ChatPage } from '../pages/chatPage/ChatPage';
import { ChatPageActions } from '../pages/chatPage/ChatPageActions';
import { ChatPageActiveChat } from '../pages/chatPage/ChatPageActiveChat';
import { ChatActionsContainer } from './ChatActionsContainer';
import { ActiveChatContainer } from './ActiveChatContainer';

export const ChatPageContainer: FC = () => {
   return (
      <ChatPage>
         <ChatPageActions>
            <ChatActionsContainer />
         </ChatPageActions>

         <ChatPageActiveChat>
            <ActiveChatContainer />
         </ChatPageActiveChat>
      </ChatPage>
   );
};
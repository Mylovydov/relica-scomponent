import React, { FC } from 'react';

import { Container } from '../../components/common/container/Container';
import { ChatPageBody } from './ChatPageBody';

// StyledProps

// Styled

// ComponentProps

export const ChatPage: FC = ({ children }) => {
   return (
      <section>
         <Container>
            <ChatPageBody>
               {children}
            </ChatPageBody>
         </Container>
      </section>
   );
};
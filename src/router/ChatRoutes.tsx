import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ChatPageContainer } from '../containers/ChatPageContainer';
import { ChatLayout } from '../layout/ChatLayout';
import { PostPage } from '../pages/postPage/PostPage';

export const ChatRoutes: FC = () => {
   return (
      <Routes>
         <Route path='/' element={<ChatLayout />}>
               <Route index element={<PostPage />}/>
               <Route path='chat' element={<ChatPageContainer />}/>
         </Route>
      </Routes>
   );
};
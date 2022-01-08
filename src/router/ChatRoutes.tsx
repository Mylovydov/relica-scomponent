import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ChatPageContainer } from '../containers/ChatPageContainer';
import { ProfilePageContainer } from '../containers/ProfilePageContainer';
import { ChatLayout } from '../layout/ChatLayout';
import { PostPage } from '../pages/postPage/PostPage';

export const ChatRoutes: FC = () => {
   return (
      <Routes>
         <Route path='/' element={<ChatLayout />}>
               <Route index element={<PostPage />}/>
               <Route path='chat' element={<ChatPageContainer />}/>
               <Route path='profile' element={<ProfilePageContainer />}/>
         </Route>
      </Routes>
   );
};
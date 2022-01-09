import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ChatPageContainer } from '../containers/ChatPageContainer';
import { ProfilePageContainer } from '../containers/ProfilePageContainer';
import { ChatLayout } from '../layout/ChatLayout';
import { PostPage } from '../pages/postPage/PostPage';
import { DetailPostPageContainer } from '../containers/DetailPostPageContainer';
import { ExplorePage } from '../pages/explorePage/ExplorePage';
import { NotificationsPage } from '../pages/notificationsPage/NotificationsPage';

export const ChatRoutes: FC = () => {
   return (
      <Routes>
         <Route path='/' element={<ChatLayout />}>
               <Route index element={<PostPage />}/>
               <Route path='chat' element={<ChatPageContainer />}/>
               <Route path='profile' element={<ProfilePageContainer />}/>
               <Route path='post-in-detail' element={<DetailPostPageContainer />}/>
               <Route path='explore' element={<ExplorePage />}/>
               <Route path='notifications' element={<NotificationsPage />}/>
         </Route>
      </Routes>
   );
};
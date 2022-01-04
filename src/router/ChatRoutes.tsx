import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChatLayout } from '../layout/ChatLayout';
import { PostPage } from '../pages/postPage/PostPage';

export const ChatRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<ChatLayout />}>
               <Route index element={<PostPage />}/>
         </Route>
      </Routes>
   );
};
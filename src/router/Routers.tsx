import React, {FC} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthRoutes } from './AuthRoutes';
import { ChatRoutes } from './ChatRoutes';


export const Routers: FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/auth/*' element={<AuthRoutes />}/>
            <Route path='/*' element={<ChatRoutes />}/>
      </Routes>
    </BrowserRouter>
   )
} 
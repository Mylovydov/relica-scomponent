import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { LoginWithWalletPage } from '../pages/loginWithWalletPage/LoginWithWalletPage';
import { SelectWalletPage } from '../pages/selectWalletPage/SelectWalletPage';
import { UsernamePage } from '../pages/usernamePage/UsernamePage';
import { WelcomePage } from '../pages/welcomePage/WelcomePage';

export const AuthRoutes: FC = () => {
   return (
      <Routes>
         <Route path='/' element={<AuthLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path='select-wallet' element={<SelectWalletPage />} />
            <Route path='username' element={<UsernamePage />}/>
            <Route path='login-with-wallet' element={<LoginWithWalletPage />}/>
         </Route>
      </Routes>
   );
};
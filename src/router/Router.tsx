import React, {FC} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { LoginWithWalletPage } from '../pages/loginWithWallet/LoginWithWalletPage';
import { SelectWalletPage } from '../pages/selectWalletPage/SelectWalletPage';
import { UsernamePage } from '../pages/usernamePage/UsernamePage';
import { WelcomePage } from '../pages/welcomePage/WelcomePage';
// import { SelectWalletPage } from '../pages/SelectWalletPage';
// import { UsernamePage } from '../pages/UsernamePage';
// import { LoginWithWalletPage } from '../pages/LoginWithWalletPage';


export const Router: FC = () => {
   return (
      <BrowserRouter>
         <Routes>
         <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path="select-wallet" element={<SelectWalletPage />} />
            <Route path="username" element={<UsernamePage />}/>
            <Route path="login-with-wallet"  element={<LoginWithWalletPage />}/>
         </Route>
      </Routes>
    </BrowserRouter>
   )
} 
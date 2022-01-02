import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Wrapper } from '../components/authPages/wrapper/Wrapper';
import { Fullscreen } from '../components/authPages/fullscreen/Fullscreen';
import { Auth } from '../components/authPages/auth/Auth';
import { AuthImage } from '../components/authPages/auth/authImage/AuthImage';
import { AuthMain } from '../components/authPages/auth/authMain/AuthMain';
import { AuthAction } from '../components/authPages/auth/authAction/AuthAction';

export const AuthLayout: FC = () => {
   return (
      <>
         <Wrapper>
          <Fullscreen>
            <Auth>
               <AuthImage bgImgPath={"/assets/left_bg.png"}>
                  <AuthMain/>
               </AuthImage>

               <AuthAction>
                  <Outlet/>
               </AuthAction>
            </Auth>
          </Fullscreen>
        </Wrapper>
      </>
   )
}
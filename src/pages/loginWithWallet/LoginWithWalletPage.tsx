import React, { FC } from 'react';
import styled from 'styled-components';
import { AuthCard } from '../../components/authPages/auth/authCard/AuthCard';
import { AuthCardContent } from '../../components/authPages/auth/authCard/AuthCardContent';
import { AuthCardHeader } from '../../components/authPages/auth/authCard/AuthCardHeader';
import { BackBtn } from '../../components/common/back-login-btn-header/BackLoginBtn';
import { Hidden, hiddenVariants } from '../../components/common/hidden/Hidden';
import { ClassTypographyVariants, TagTypographyVariants, Typography } from '../../components/common/typography/Typography';
import { LoginWithWalletFormContainer } from '../../containers/LoginWithWalletFormContainer';

import { LoginWithWalletPageBody } from './LoginWithWalletPageBody'

// StyledProps
interface StyledLoginWithWalletPageProps {
   pTop?: string
}

// Styled
const StyledLoginWithWalletPage = styled.div<StyledLoginWithWalletPageProps>`
   padding-top: ${props => props.pTop || '10rem'};

   h1 {
      margin-bottom: 4.5rem;
   }

   @media (max-width: $md2) {
      padding-top: 5.5rem;
   }

   @media (max-width: $md4) {
      padding-top: 3.5rem;
   }
`
// ComponentProps


export const LoginWithWalletPage: FC = () => {
   return (
      <StyledLoginWithWalletPage>
         <LoginWithWalletPageBody>

            <AuthCard>
               <Hidden mediaVisible={hiddenVariants.desktopUp}>
                  <AuthCardHeader>
                     <BackBtn children={'Back'}/>
                  </AuthCardHeader>
               </Hidden>

               <AuthCardContent>
                  <Typography
                     variant={ClassTypographyVariants.h1}
                     component={TagTypographyVariants.h1}
                  >
                     Log in with wallet
                  </Typography>

                  <LoginWithWalletFormContainer action='/'/>

               </AuthCardContent>
            </AuthCard>

         </LoginWithWalletPageBody>
      </StyledLoginWithWalletPage>
   );
};
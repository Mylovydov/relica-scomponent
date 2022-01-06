import React, { FC } from 'react';
import styled from 'styled-components';

import { AuthCard } from '../../components/authPages/auth/authCard/AuthCard';
import { AuthCardContent } from '../../components/authPages/auth/authCard/AuthCardContent';
import { AuthCardHeader } from '../../components/authPages/auth/authCard/AuthCardHeader';
import { BackBtn } from '../../components/common/back-login-btn-header/BackLoginBtn';
import { Hidden, hiddenVariants } from '../../components/common/hidden/Hidden';
import { LoginWithWalletFormContainer } from '../../containers/LoginWithWalletFormContainer';
import { Link } from 'react-router-dom';

import { LoginWithWalletPageBody } from './LoginWithWalletPageBody'
import { AuthCardFooter } from '../../components/authPages/auth/authCard/AuthCardFooter';
import { Btn } from '../../components/common/btn/Btn';
import { StyledTitleText } from '../../components/typography/Typography1'

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
                     <Link to='/auth'>
                        <BackBtn children={'Back'}/>
                     </Link>
                  </AuthCardHeader>
               </Hidden>

               <AuthCardContent>
                  <StyledTitleText>
                     Log in with wallet
                  </StyledTitleText>


                  <LoginWithWalletFormContainer action='/'/>

               </AuthCardContent>

               <Hidden mediaVisible={hiddenVariants.desktopDown}>
                        <AuthCardFooter>
                            <Link to='/auth'>
                                <Btn children={'Back'}/>
                            </Link>
                        </AuthCardFooter>
                    </Hidden>
            </AuthCard>

         </LoginWithWalletPageBody>
      </StyledLoginWithWalletPage>
   );
};
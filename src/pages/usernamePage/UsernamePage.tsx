import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../styles/theme';

import { UsernamePageBody } from '../usernamePage/UsernamePageBody'
import { AuthCard } from '../../components/authPages/auth/authCard/AuthCard';
import { AuthCardContent } from '../../components/authPages/auth/authCard/AuthCardContent';
import { AuthCardFooter } from '../../components/authPages/auth/authCard/AuthCardFooter';
import { AuthCardHeader } from '../../components/authPages/auth/authCard/AuthCardHeader'
import { Hidden, hiddenVariants } from '../../components/common/hidden/Hidden';
import { BackBtn } from '../../components/common/back-login-btn-header/BackLoginBtn';
import { Btn } from '../../components/common/btn/Btn';
import { UsernameFormContainer } from '../../containers/UsernameFormContainer';
import { Link } from 'react-router-dom'
import { StyledTitleText } from '../../components/typography/Typography1'

// StyledProps
interface StyledUsernamePageProps {
   pTop?: string
}

// Styled
const StyledUsernamePage = styled.div<StyledUsernamePageProps>`
   padding-top: ${props => props.pTop || '10rem'};

   h1 {
      margin-bottom: 4.5rem;
   }

   @media (max-width: ${baseTheme.media.md2}) {
      padding-top: 5.5rem;
   }

   @media (max-width: ${baseTheme.media.md4}) {
      padding-top: 3.5rem;
   }
`

// ComponentProps

export const UsernamePage: FC = () => {
   return (
      <StyledUsernamePage>
         <UsernamePageBody>

            <AuthCard>
               <Hidden mediaVisible={hiddenVariants.desktopUp}>
                  <AuthCardHeader>
                     <Link to='/auth/select-wallet'>
                        <BackBtn children={'Back'}/>
                     </Link> 
                  </AuthCardHeader>
               </Hidden>

               <AuthCardContent>
                  <StyledTitleText>
                     Username
                  </StyledTitleText>

                  <UsernameFormContainer action={'/'}/>
               </AuthCardContent>

               <Hidden mediaVisible={hiddenVariants.desktopDown}>
                  <AuthCardFooter>
                     <Link to="/auth/select-wallet">
                        <Btn children={'Back'}/>
                     </Link>
                  </AuthCardFooter>
               </Hidden>
            </AuthCard>

         </UsernamePageBody>
      </StyledUsernamePage>
   );
};
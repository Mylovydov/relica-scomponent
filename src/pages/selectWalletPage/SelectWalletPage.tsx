import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../styles/theme';

import { SelectWalletPageBody } from './SelectWalletPageBody';
import { AuthCard } from '../../components/authPages/auth/authCard/AuthCard';
import { AuthCardContent } from '../../components/authPages/auth/authCard/AuthCardContent'; 
import { AuthCardHeader } from '../../components/authPages/auth/authCard/AuthCardHeader'; 
import { AuthCardFooter } from '../../components/authPages/auth/authCard/AuthCardFooter';
import { Hidden, hiddenVariants } from '../../components/common/hidden/Hidden';
import { BackBtn } from '../../components/common/back-login-btn-header/BackLoginBtn';
import { Btn } from '../../components/common/btn/Btn';
import { SelectWalletFormContainer } from '../../containers/SelectWalletFormContainer';
import { Link } from 'react-router-dom';
import { StyledTitleText } from '../../components/typography/Typography1'

// StyledProps
interface StyledSelectWalletPageProps {
    pTop?: string
}

// Styled
const StyledSelectWalletPage = styled.div<StyledSelectWalletPageProps>`
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

export const SelectWalletPage: FC = () => {
    return (
        <StyledSelectWalletPage >
            <SelectWalletPageBody>

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
                            Select wallet
                        </StyledTitleText>

                        <SelectWalletFormContainer action='/'/>

                    </AuthCardContent>

                    <Hidden mediaVisible={hiddenVariants.desktopDown}>
                        <AuthCardFooter>
                            <Link to='/auth'>
                                <Btn children={'Back'}/>
                            </Link>
                        </AuthCardFooter>
                    </Hidden>

                </AuthCard>

            </SelectWalletPageBody>
        </StyledSelectWalletPage>
    );
};
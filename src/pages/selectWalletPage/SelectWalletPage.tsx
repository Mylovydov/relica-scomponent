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
import { ClassTypographyVariants, TagTypographyVariants, Typography } from '../../components/common/typography/Typography';
import { Btn } from '../../components/common/btn/Btn';
import { SelectWalletFormContainer } from '../../containers/SelectWalletFormContainer';


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
                            <BackBtn children={'Back'}/>
                        </AuthCardHeader>
                    </Hidden>

                    <AuthCardContent>
                        <Typography
                            variant={ClassTypographyVariants.h1}
                            component={TagTypographyVariants.h1}
                        >
                            Select wallet
                        </Typography>

                        <SelectWalletFormContainer action='/'/>

                    </AuthCardContent>

                    <Hidden mediaVisible={hiddenVariants.desktopDown}>
                        <AuthCardFooter>
                            <Btn children={'Back'}/>
                        </AuthCardFooter>
                    </Hidden>

                </AuthCard>

            </SelectWalletPageBody>
        </StyledSelectWalletPage>
    );
};
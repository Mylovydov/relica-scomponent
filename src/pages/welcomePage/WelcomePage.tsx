import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

import { WelcomePageBody } from './WelcomePageBody';
import { AuthCard } from '../../components/authPages/auth/authCard/AuthCard';
import { AuthCardContent } from '../../components/authPages/auth/authCard/AuthCardContent';

import { ClassTypographyVariants, TagTypographyVariants, Typography } from '../../components/common/typography/Typography';
import { Btn, BtnVariants } from '../../components/common/btn/Btn';
import { Hidden, hiddenVariants } from '../../components/common/hidden/Hidden';

// StyledProps

// Styled
const StyledWelcomePage = styled.div`
    margin-top: 16rem;

    @media (max-width: ${baseTheme.media.md2}) {
        margin-top: 5.5rem;
    }
`

// ComponentProps

export const WelcomePage: FC = () => {
    return (
        <StyledWelcomePage>
            <WelcomePageBody>
                <AuthCard>
                    <AuthCardContent>
                        <Typography
                            variant={ClassTypographyVariants.h1}
                            component={TagTypographyVariants.h2}
                        >
                            Welcome,
                        </Typography>

                        <Typography 
                            variant={ClassTypographyVariants.subtitle1}
                            component={TagTypographyVariants.span}
                        >
                            How can we help you today?
                        </Typography>

                        <Btn children={'Login with wallet'}/>
                        <Btn
                            children={'Create an account'}
                            btnVariant={BtnVariants.blue}
                        />

                    </AuthCardContent>
                </AuthCard>
            </WelcomePageBody>
        </StyledWelcomePage>
    );
};
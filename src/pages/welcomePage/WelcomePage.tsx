import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

import { WelcomePageBody } from './WelcomePageBody';
import { AuthCard } from '../../components/authPages/auth/authCard/AuthCard';
import { AuthCardContent } from '../../components/authPages/auth/authCard/AuthCardContent';

import { Btn, BtnVariants } from '../../components/common/btn/Btn';
import { Link } from 'react-router-dom';
import { StyledTitleText, StyledSubtitleText } from '../../components/typography/Typography1';


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
                        <StyledTitleText
                            as='h2'
                        >
                            Welcome,
                        </StyledTitleText>
                    
                        <StyledSubtitleText>
                            How can we help you today?
                        </StyledSubtitleText>

                        <Link to={'login-with-wallet'}>
                            <Btn children={'Login with wallet'}/>
                        </Link>

                        <Link to={'select-wallet'}>
                            <Btn
                                children={'Create an account'}
                                btnVariant={BtnVariants.blue}
                            />
                        </Link>

                    </AuthCardContent>
                </AuthCard>
            </WelcomePageBody>
        </StyledWelcomePage>
    );
};
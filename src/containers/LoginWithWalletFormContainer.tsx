import React, { FC } from 'react';
import styled from 'styled-components';

import { Form } from '../components/common/form/Form';
import { FormHeader } from '../components/common/form/FormHeader'
import { FormFooter } from '../components/common/form/FormFooter';
import { InputItem } from '../components/common/form/inputItem/InputItem';
import { Btn, BtnVariants } from '../components/common/btn/Btn';
import { PasswordActions } from '../components/common/form/forgotPassword/PasswordActions'


// StyledProps

// Styled

// ComponentProps
interface LoginWithWalletFormContainerProps {
    action: string
 }
 
export const LoginWithWalletFormContainer: FC<LoginWithWalletFormContainerProps> = ({action}) => {
    return (
        <Form action={action}>
            <FormHeader>
                <InputItem
                    inputName={'UserEmail'}
                    inputPlaceholder={'Email'}
                    inputLabel={'Email'}
                    inpuType={'email'}
                />
                <InputItem
                    inputName={'UserPassword'}
                    inputPlaceholder={'Password'}
                    inputLabel={'Password'} 
                    inpuType={'password'}
                />

                <PasswordActions
                    checkboxId={'forgot'}
                    checkboxLabelFor={'forgot'}
                    checkboxName={'forgotPass'}
                    checkboxText={'Remember me'}
                    forgotLinkText={'Forgot password ?'}
                />
            </FormHeader>

            <FormFooter>
                <Btn children={'Log in'} btnVariant={BtnVariants.blue}/>
            </FormFooter>
        </Form>
    );
};
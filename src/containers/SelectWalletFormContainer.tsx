import React, { FC } from 'react';
import styled from 'styled-components';

import { Form } from '../components/common/form/Form';
import { FormHeader } from '../components/common/form/FormHeader'
import { FormFooter } from '../components/common/form/FormFooter';
import { RadioItem } from '../components/common/form/radioItem/RadioItem'
import { Btn, BtnVariants } from '../components/common/btn/Btn';

// StyledProps

// Styled

// ComponentProps
interface SelectWalletFormContainerProps {
    action: string
}

export const SelectWalletFormContainer: FC<SelectWalletFormContainerProps> = ({action}) => {
    return (
        <Form action={action}>
            <FormHeader>
                <RadioItem
                    radioId={'wallet1'}
                    radioFor={'wallet1'}
                    radioImg={'/assets/moneybutton.png'}
                    radioAlt={'wallet icon'}
                    radioName={'wallet'}
                    children={'Handcash'}
                />

                <RadioItem
                    radioId={'wallet2'}
                    radioFor={'wallet2'}
                    radioImg={'/assets/handcash.png'}
                    radioAlt={'wallet icon'}
                    radioName={'wallet'}
                    children={'Moneybutton'}
                />
            </FormHeader>

            <FormFooter>
                <Btn
                    type='submit'
                    btnVariant={BtnVariants.disabled}
                    children={'Continue'}
                />
            </FormFooter>
        </Form>
    );
};

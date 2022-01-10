import React, { FC } from 'react';
import { Btn, BtnVariants } from '../components/common/btn/Btn';

import { Form } from '../components/common/form/Form';
import { FormFooter } from '../components/common/form/FormFooter';
import { FormFooterWrapper } from '../components/common/form/FormFooterWrapper';
import { FormHeader } from '../components/common/form/FormHeader';
import { InputItem } from '../components/common/form/inputItem/InputItem'

export const EditProfileFormContainer: FC = () => {
   return (
      <Form action='/'>
         <FormHeader
            margin={'0 auto 7rem'}
            maxWidth={'63.5rem'}
         >
            <InputItem
               inputName={'displayName'}
               inputPlaceholder={'Display name'}
               inputLabel={'DisplayName'}
            />
            <InputItem
               inpuType={'email'}
               inputName={'displayEmail'}
               inputPlaceholder={'Email'}
               inputLabel={'Email'}
            />
            <InputItem
               inputName={'displayBio'}
               inputPlaceholder={'Bio'}
               inputLabel={'Bio'}
            />
         </FormHeader>

         <FormFooter>
            <FormFooterWrapper>
               <Btn
               children={'Discard changes'}
               type={'reset'}
               width={'18.5rem'}
               />
               <Btn
                  children={'Save changes'}
                  btnVariant={BtnVariants.blue}
                  width={'18.5rem'}
               />
            </FormFooterWrapper>
         </FormFooter>

      </Form>
   );
};
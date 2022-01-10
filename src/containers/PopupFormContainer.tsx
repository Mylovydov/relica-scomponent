import React, { FC } from 'react';

import { Form } from '../components/common/form/Form';
import { FormBody } from '../components/common/form/FormBody';
import { FormFooter } from '../components/common/form/FormFooter';
import { FormHeader } from '../components/common/form/FormHeader';
import { TextareaItem } from '../components/common/form/textareaInputItem/TextareaItem';

// StyledProps

// Styled

// ComponentProps

export const PopupFormContainer: FC = () => {
   return (
      <Form action='#'>
         <FormHeader>
            <TextareaItem
               inputName={'PostComment'}
               placeholder={'Say something nice…'}
            />
         </FormHeader>

         <FormBody>

         </FormBody>

         <FormFooter>
            
         </FormFooter>
      </Form>
   );
};
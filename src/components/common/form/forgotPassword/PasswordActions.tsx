import React, { FC } from 'react';
import styled from 'styled-components';

import { FormGroup } from '../FormGroup';
import { CheckboxItem } from '../checkboxItem/CheckboxItem';
import { ForgotPasswordItem } from './ForgotPasswordItem';

// StyledProps

// Styled
const StyledPasswordActions = styled.div``

const StyledPasswordActionsBody = styled.div`
   display: flex;
   justify-content: space-between;
`


// ComponentProps
interface PasswordActionsProps {
   checkboxId: string,
   checkboxLabelFor: string,
   checkboxName: string,
   checkboxText: string,
   forgotLinkText: string
}

export const PasswordActions: FC<PasswordActionsProps> = (
   {
      checkboxId,
      checkboxLabelFor,
      checkboxName,
      checkboxText,
      forgotLinkText
   }
) => {
   return (
      <FormGroup>
         <StyledPasswordActions>
            <StyledPasswordActionsBody>

               <CheckboxItem
                  checkboxId={checkboxId}
                  checkboxLabelFor={checkboxLabelFor}
                  checkboxName={checkboxName}
                  children={checkboxText} 
               />
               <ForgotPasswordItem children={forgotLinkText}/>
               
            </StyledPasswordActionsBody>
         </StyledPasswordActions>
      </FormGroup>
   );
};
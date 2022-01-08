import React, { FC } from 'react';
import styled from 'styled-components';

import { FormGroup } from '../FormGroup';
import { CheckboxItem } from '../checkboxItem/CheckboxItem';
import { StyledSubtitleText } from '../../../typography/Typography1';
import { baseTheme } from '../../../../styles/theme';

// StyledProps

// Styled
const StyledPasswordActions = styled.div``

const StyledPasswordActionsBody = styled.div`
   display: flex;
   justify-content: space-between;

   span {
      transition: all 0.2s linear;
      cursor: pointer;

      &:hover {
         color: ${baseTheme.colors.primaryDarken};
      }
   }
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

               <StyledSubtitleText
                  as='span'
                  color={baseTheme.colors.primary}
                  weight='500'
               >
                  {forgotLinkText}
               </StyledSubtitleText>
            </StyledPasswordActionsBody>
         </StyledPasswordActions>
      </FormGroup>
   );
};
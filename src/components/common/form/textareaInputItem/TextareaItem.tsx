import React, { FC } from 'react';

import styled from 'styled-components';

import { FormGroup } from '../FormGroup'
import { styledInput } from '../inputItem/InputItem';
// StyledProps

// Styled
const StyledTextareaItem = styled.textarea`
   ${styledInput}
   resize: none;
   display: block;
   padding: 0;
`
// ComponentProps
interface TextareaItemProps {
   inputName: string
   placeholder: string
}

export const TextareaItem: FC<TextareaItemProps> = ({inputName, ...placeholder}) => {
   return (
      <FormGroup mTop={'3.5rem'}>
         <StyledTextareaItem name={inputName} {...placeholder} />
      </FormGroup>
   );
};
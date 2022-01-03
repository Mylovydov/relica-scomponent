import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledForm = styled.form`

`

// ComponentProps

interface FormProps {
   action: string
}

export const Form: FC<FormProps> = ({ action, children }) => {
   return (
      <StyledForm action={action}>
         {children}
      </StyledForm>
   );
};
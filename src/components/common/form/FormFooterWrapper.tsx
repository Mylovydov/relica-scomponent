import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledFormFooterWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;

   button {
      &:not(:last-child) {
         margin: 0 1.5rem 0 0;
      }
   }
`
// ComponentProps


export const FormFooterWrapper: FC = (props) => {
   return <StyledFormFooterWrapper {...props} />
};
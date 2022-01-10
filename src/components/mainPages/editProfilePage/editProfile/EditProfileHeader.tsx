import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfileHeader = styled.div`
   margin: 0 0 3rem 0;

   >h1 {
      text-align: center;
   }
`
// ComponentProps


export const EditProfileHeader: FC = (props) => {
   return <StyledEditProfileHeader {...props} />
};
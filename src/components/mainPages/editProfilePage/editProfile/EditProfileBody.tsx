import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfileBody = styled.div`
   padding: 6rem 0 12.4rem;
`

// ComponentProps


export const EditProfileBody: FC = (props) => {
   return <StyledEditProfileBody {...props} />
};
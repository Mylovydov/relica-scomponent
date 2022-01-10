import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfileFooter = styled.div`
   margin: 5rem 0 0 0;
`
// ComponentProps


export const EditProfileFooter: FC = (props) => {
   return <StyledEditProfileFooter {...props} />
};
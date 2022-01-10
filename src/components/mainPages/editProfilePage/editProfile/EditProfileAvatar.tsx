import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfileAvatar = styled.div`
   margin-top: -5.75rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

// ComponentProps


export const EditProfileAvatar: FC = (props) => {
   return <StyledEditProfileAvatar {...props} />
};
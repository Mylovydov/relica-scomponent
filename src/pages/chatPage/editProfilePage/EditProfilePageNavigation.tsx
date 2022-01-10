import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfilePageNavigation = styled.aside`
   position: fixed;
   height: 100vh;
   width: 30rem;
   border-right: 1px solid ${({ theme }) => theme.colors.chatBorder};
`

// ComponentProps


export const EditProfilePageNavigation: FC = (props) => {
   return <StyledEditProfilePageNavigation {...props} />
}
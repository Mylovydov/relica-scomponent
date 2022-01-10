import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfilePageNavigation = styled.aside`
   flex: 0 0 30rem;
   border-right: 1px solid ${({ theme }) => theme.colors.chatBorder};
`

// ComponentProps


export const EditProfilePageNavigation: FC = (props) => {
   return <StyledEditProfilePageNavigation {...props} />
}
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfilePageBody = styled.div`
   display: flex;
   min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeigth}rem);
`
// ComponentProps

export const EditProfilePageBody: FC = (props) => {
   return <StyledEditProfilePageBody {...props} />
};
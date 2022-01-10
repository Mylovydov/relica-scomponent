import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';

// StyledProps

// Styled
const StyledEditProfilePageContent = styled.div`
   flex: 1 1 auto;
   overflow-y: auto;
   max-height: calc(100vh - ${baseTheme.sizes.headerHeigth}rem)
`
// ComponentProps

export const EditProfilePageContent: FC = (props) => {
   return <StyledEditProfilePageContent {...props} />
};
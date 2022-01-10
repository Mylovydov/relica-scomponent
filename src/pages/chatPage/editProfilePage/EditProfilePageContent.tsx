import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';

// StyledProps

// Styled
const StyledEditProfilePageContent = styled.div`
   padding: 0 0 0 30rem;
`
// ComponentProps

export const EditProfilePageContent: FC = (props) => {
   return <StyledEditProfilePageContent {...props} />
};
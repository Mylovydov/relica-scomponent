import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfileContent = styled.div`
   position: relative;
`

// ComponentProps


export const EditProfileContent: FC = (props) => {
   return <StyledEditProfileContent {...props} />
};
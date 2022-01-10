import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledEditProfileAvatarWrapper = styled.div`
   position: relative;
   display: inline-block;
   margin: 0 0 3rem 0;
`

// ComponentProps


export const EditProfileAvatarWrapper: FC = (props) => {
   return <StyledEditProfileAvatarWrapper {...props} />
};
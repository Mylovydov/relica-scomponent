import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledEditProfileChangePhotoIconProps {
   bottom?: string
   top?: string
   right?: string
   left?: string
}

// Styled
const StyledEditProfileChangePhotoIcon = styled.div<StyledEditProfileChangePhotoIconProps>`
   position: absolute;
   bottom: ${({ bottom }) => bottom};
   right: ${({ right }) => right};
   top: ${({ top }) => top};
   left: ${({ left }) => left};
   width: 4rem;
   cursor: pointer;
   height: 4rem;
   z-index: 2;
`
// ComponentProps
interface EditProfileChangeIconProps {
   bottom?: string
   top?: string
   right?: string
   left?: string
}

export const EditProfileChangeIcon: FC<EditProfileChangeIconProps> = (props) => {
   return <StyledEditProfileChangePhotoIcon {...props} />
};
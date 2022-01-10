import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPopupBody = styled.div`
   /* transform: scale(0); */
   transform: scale(1);
   transition: all 0.3s ease 0s;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: .5rem;
   width: 100%;
   max-width: 77rem;
`
// ComponentProps

export const PopupBody: FC = (props) => {
   return <StyledPopupBody {...props} />
};
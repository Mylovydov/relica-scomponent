import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPopupHeader = styled.div`
   padding: 1.9rem 1rem;
   position: relative;
   border-bottom: .1rem solid ${({ theme }) => theme.colors.chatBorder};
   text-align: center;
`
// ComponentProps

export const PopupHeader:FC = (props) => {
   return <StyledPopupHeader {...props} />
};
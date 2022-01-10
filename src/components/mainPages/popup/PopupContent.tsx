import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPopupContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 100%;
   flex: 1 1 auto;
   width: 100%;
`
// ComponentProps

export const PopupContent: FC = (props) => {
   return <StyledPopupContent {...props} />
};
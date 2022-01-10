import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPopupMain = styled.div`
   margin: 4rem 0 0 0;
`
// ComponentProps

export const PopupMain: FC = (props) => {
   return <StyledPopupMain {...props} />
};
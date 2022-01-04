import React, { FC } from 'react';
import styled from 'styled-components';
import { Btn, BtnVariants } from '../../../common/btn/Btn';

import { ActionsHeaderButton } from './ActionsHeaderButton';
// StyledProps
// Styled
const StyledActionsHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
// ComponentProps

export const ActionsHeader: FC = ({children}) => {
   return (
      <StyledActionsHeader>
         {children}
      </StyledActionsHeader>
   );
};
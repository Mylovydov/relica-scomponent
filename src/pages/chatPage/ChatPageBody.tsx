import React, {FC} from 'react';

import styled from 'styled-components';

import { baseTheme } from '../../styles/theme';

// StyledProps

// Styled
const StyledChatPageBody = styled.div`
   display: flex;
   min-height: calc(100vh - ${baseTheme.sizes.headerHeigth}rem);
`

// ComponentProps

export const ChatPageBody: FC = ({ children }) => {
   return (
      <StyledChatPageBody>
         {children}
      </StyledChatPageBody>
   );
};
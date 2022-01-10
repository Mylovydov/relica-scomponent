import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledChatPageActionsProps {
   flex?: string
}

// Styled
const StyledChatPageActions = styled.div<StyledChatPageActionsProps>`
   border-right: .1rem solid ${({ theme }) => theme.colors.chatBorder};
   border-left: .1rem solid ${({ theme }) => theme.colors.chatBorder};
   flex: ${({ flex = '0 0 37rem'}) => flex};
`

// ComponentProps

export const ChatPageActions: FC = (props) => {
   return <StyledChatPageActions {...props}/>
};
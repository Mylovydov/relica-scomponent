import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledChatActionsHeaderProps {
   flex?: string
}

// Styled
const StyledChatActionsHeader = styled.div<StyledChatActionsHeaderProps>`
   flex: ${({ flex = '0 0 10rem'}) => flex};
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 1.7rem;
   border-bottom: .1rem solid ${({ theme }) => theme.colors.chatBorder};
`

// ComponentProps


export const ChatActionsHeader: FC = (props) => {
   return <StyledChatActionsHeader {...props}/>
};
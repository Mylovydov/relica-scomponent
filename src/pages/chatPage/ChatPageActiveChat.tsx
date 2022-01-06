import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledChatPageActiveChat = styled.div`
   flex: 1 1 auto;
`
// ComponentProps


export const ChatPageActiveChat:FC = (props) => {
   return <StyledChatPageActiveChat {...props}/>
};
import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps

// Styled
const StyledChatActions = styled.div`
   display: flex;
   flex-direction: column;
`
// ComponentProps

export const ChatActions: FC = (props) => {
   return <StyledChatActions {...props}/>
};
import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme'; 

// StyledProps

// Styled
const StyledChatActionsBody = styled.div`
   padding-top: 1.5rem;
   flex: 1 1 auto;
   max-height: calc(100vh - (${baseTheme.sizes.headerHeigth}rem + 1.5rem + 10rem));
   overflow-y: auto;
   overflow-x: hidden;
`

// ComponentProps


export const ChatActionsContent: FC = (props) => {
   return <StyledChatActionsBody {...props}/>
};
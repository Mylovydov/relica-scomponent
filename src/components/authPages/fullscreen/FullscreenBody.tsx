import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';

// StyledProps
interface StyledFullscreenBodyProps {
   bgColor?: string
}

// ComponentProps
interface FullscreenBodyProps {
   bgColor?: string
}

// Styled
const StyledFullscreenBody = styled.div<StyledFullscreenBodyProps>`
    background-color: ${(props) => props.bgColor || baseTheme.colors.white};
    max-width: 100%;
    margin: 0 auto;
    flex: 1 1 auto;
`

export const FullscreenBody: FC<FullscreenBodyProps> = (props) => {
   return <StyledFullscreenBody {...props}/>
};
import React, { FC } from 'react';

import { FullscreenBody } from './FullscreenBody';

import styled from 'styled-components';

// Styled
const StyledFullscreen = styled.div`
    min-height: 100vh;
    display: flex;
`

// ComponentProps
interface FullscreenBodyProps {
    bgColor?: string
}

export const Fullscreen: FC<FullscreenBodyProps> = ({bgColor, children}) => {
    return (
        <StyledFullscreen>
            <FullscreenBody bgColor={bgColor}>
                {children}
            </FullscreenBody>
        </StyledFullscreen>
    );
};
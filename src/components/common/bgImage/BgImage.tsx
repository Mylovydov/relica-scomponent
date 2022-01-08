import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledbgImageProps {
    paddingBot?: string
    minHeight?: string
}

// Styled
const StyledbgImage = styled.div<StyledbgImageProps>`
    position: relative;
    overflow: hidden;
    padding-bottom: ${({ paddingBot = '24.75%'}) => paddingBot};
    min-height: ${({ minHeight = '20rem'}) => minHeight};

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }
`
// ComponentProps
interface bgImageProps {
    imgPath: string
    imgAlt?: string
    paddingBot?: string
    minHeight?: string
}

export const BgImage: FC<bgImageProps> = (
    {
        imgPath,
        imgAlt,
        ...props
    }
) => {
    return (
        <StyledbgImage {...props}>
            <img src={imgPath} alt={imgAlt} />
        </StyledbgImage>
    );
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledbgImageProps {
    paddingBot?: string
    minHeight?: string
    brdRadius?: string
    hover?: boolean
}

// Styled
const StyledbgImage = styled.div<StyledbgImageProps>`
    position: relative;
    overflow: hidden;
    padding-bottom: ${({ paddingBot = '24.75%'}) => paddingBot};
    min-height: ${({ minHeight = '20rem'}) => minHeight};
    border-radius: ${({ brdRadius = '0'}) => brdRadius};

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        transition: all 0.2s linear;
    }

    ${({ hover }) => hover ? 
        '@media (any-hover:hover) { &:hover { img {transform: scale(1.1); opacity: .4;}&+div { opacity: 1;}}}' : 
        void 0
    }

    


`
// ComponentProps
interface bgImageProps {
    imgPath: string
    imgAlt?: string
    paddingBot?: string
    minHeight?: string
    brdRadius?: string
    hover?: boolean
}

export const Image: FC<bgImageProps> = (
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
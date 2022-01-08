import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';

// StyledProps
interface StyledFileLabelProps {
    height?: string
    width?: string
    border?: string
    brdRadius?: string
    bgColor?: string
    hoverBorder?: string
    hoverBgColor?: string
    mediaMd4Height?: string
}

// Styled
const StyledFileLabel = styled.label<StyledFileLabelProps>`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    height: ${({ height = '11.2rem'}) => height};
    width: ${({ width = '100%' }) => width};
    border: ${({ border = '.1rem solid #DBDBDB' }) => border};
    border-radius: ${({ brdRadius  = '1rem'}) => brdRadius};
    background-color: ${({ bgColor = baseTheme.colors.white}) => bgColor};

    transition: all .2s linear;

    &:hover {
        border: ${({ hoverBorder = '1px solid #10A5F52F' }) => hoverBorder};
        background-color: ${({ hoverBgColor = '#F0F9FD'}) => hoverBgColor};
    }

    @media (max-width: ${baseTheme.media.md4}) {
        height: ${({ mediaMd4Height = '7.5rem'}) => mediaMd4Height};
    }
`
// ComponentProps
interface FileLabelProps {
    htmlFor: string

    height?: string
    width?: string
    border?: string
    brdRadius?: string
    bgColor?: string
    hoverBorder?: string
    hoverBgColor?: string
    mediaMd4Height?: string
}

export const FileLabel: FC<FileLabelProps> = (props) => {
    return <StyledFileLabel {...props}/>
};
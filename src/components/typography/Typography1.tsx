import React from 'react';

import styled, { css } from 'styled-components';

interface TypographyProps {
    weight?: '400' | '500' | '700' | string
    fontSize?: string,
    color?: string,
    md2FontSize?: string
    md3FontSize?: string
    md4FontSize?: string
    textDecor?: string
}

const lineHeight = css`
    line-height: 130%;
`

export const StyledTitleText = styled.h1<TypographyProps>`
    color: ${({ theme, color }) => color || theme.colors.black};
    font-weight: ${({ weight = '700' }) => weight};
    font-size: ${({ fontSize = '4rem' }) => fontSize};
    text-decoration: ${({ textDecor = 'none'}) => textDecor};
    ${lineHeight}

    @media (max-width: ${({ theme }) => theme.media.md2}) {
        font-size: ${({ md2FontSize = '4rem'}) => md2FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md3}) {
        font-size: ${({ md3FontSize = '3.5rem'}) => md3FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md4}) {
        font-size: ${({ md4FontSize = '3rem'}) => md4FontSize};
    }
`

export const StyledSubtitleText = styled.p<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.black};
    font-weight: ${({ weight = 500 }) => weight};
    font-size: ${({ fontSize = '1.6rem' }) => fontSize};
    text-decoration: ${({ textDecor = 'none'}) => textDecor};
    ${lineHeight}

    @media (max-width: ${({ theme }) => theme.media.md2}) {
        font-size: ${({ md2FontSize = '1.6rem'}) => md2FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md3}) {
        font-size: ${({ md3FontSize = '1.6rem'}) => md3FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md4}) {
        font-size: ${({ md4FontSize = '1.6rem'}) => md4FontSize};
    }
`

export const StyledCaptionText = styled.span<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.gray};
    font-weight: ${({ weight = 400 }) => weight};
    font-size: ${({ fontSize = '1.3rem'}) => fontSize};
    text-decoration: ${({ textDecor = 'none'}) => textDecor};
    ${lineHeight}

    @media (max-width: ${({ theme }) => theme.media.md2}) {
        font-size: ${({ md2FontSize = '1.3rem'}) => md2FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md3}) {
        font-size: ${({ md3FontSize = '1.3rem'}) => md3FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md4}) {
        font-size: ${({ md4FontSize = '1.3rem'}) => md4FontSize};
    }
`

export const StyledBodyText = styled.p<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.black};
    font-weight: ${({ weight = 400 }) => weight};
    font-size: ${({ fontSize = '1.6rem'}) => fontSize};
    text-decoration: ${({ textDecor = 'none'}) => textDecor};
    ${lineHeight}

    @media (max-width: ${({ theme }) => theme.media.md2}) {
        font-size: ${({ md2FontSize = '1.6rem'}) => md2FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md3}) {
        font-size: ${({ md3FontSize = '1.6rem'}) => md3FontSize};
    }

    @media (max-width: ${({ theme }) => theme.media.md4}) {
        font-size: ${({ md4FontSize = '1.6rem'}) => md4FontSize};
    }
`
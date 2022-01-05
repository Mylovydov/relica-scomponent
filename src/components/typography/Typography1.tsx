import React from 'react';
import styled, { css } from 'styled-components';

interface TypographyProps {
    weight?: 400 | 500 | 700
    fontSize?: string,
    color?: string,
    md2FontSize?: string
    md3FontSize?: string
    md4FontSize?: string
}

const lineHeight = css`
    line-height: 130%;
`

export const StyledTitle = styled.h1<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.black};
    font-weight: ${({ weight = 700 }) => weight};
    font-size: ${({ fontSize = '4rem' }) => fontSize};
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

export const StyledSubtitle = styled.p<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.black};
    font-weight: ${({ weight = 500 }) => weight};
    font-size: ${({ fontSize = '1.6rem' }) => fontSize};
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

export const StyledCaption = styled.span<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.gray};
    font-weight: ${({ weight = 400 }) => weight};
    font-size: ${({ fontSize = '1.3rem'}) => fontSize};
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

export const StyledBody = styled.p<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.black};
    font-weight: ${({ weight = 400 }) => weight};
    font-size: ${({ fontSize = '1.6rem'}) => fontSize};
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


export const StyledLink = styled.div<TypographyProps>`
    color: ${({ theme, ...props }) => props.color || theme.colors.primary};
    font-weight: ${({ weight = 500 }) => weight};
    font-size: ${({ fontSize = '1.6rem'}) => fontSize};
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
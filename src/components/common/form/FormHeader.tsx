import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../styles/theme';

// StyledProps
interface StyledFormHeaderProps {
    margin?: string,
    marginMd4Media?: string
    maxWidth?: string
}

// Styled
const StyledFormHeader = styled.div<StyledFormHeaderProps>`
    margin: ${({ margin = '0 0 5.6rem 0'}) => margin};
    max-width: ${({ maxWidth }) => maxWidth};

    @media (max-width: ${baseTheme.media.md4}) {
        margin: ${({ marginMd4Media = '0 0 4rem 0'}) => marginMd4Media};
    }
`

// ComponentProps
interface FormHeaderProps {
    margin?: string
    marginMd4Media?: string
    maxWidth?: string
}


export const FormHeader: FC<FormHeaderProps> = (props) => {
   return (
      <StyledFormHeader {...props}/>
   )
}
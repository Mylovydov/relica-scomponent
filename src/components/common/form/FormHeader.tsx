import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../styles/theme';

// StyledProps
interface StyledFormHeaderProps {
    mBottom?: string,
    mBottomMedia?: string
}

// Styled
const StyledFormHeader = styled.div<StyledFormHeaderProps>`
    margin-bottom: ${props => props.mBottom || '5.6rem'};

    @media (max-width: ${baseTheme.media.md4}) {
        margin-bottom: ${props => props.mBottomMedia || '4rem'};
    }
`

// ComponentProps
interface FormHeaderProps {
    mBottom?: string,
    mBottomMedia?: string
}


export const FormHeader: FC<FormHeaderProps> = (props) => {
   return (
      <StyledFormHeader {...props}/>
   )
}
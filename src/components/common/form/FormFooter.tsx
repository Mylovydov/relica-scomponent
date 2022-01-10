import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledFormFooterProps {
    brdrTop?: string
    padding?: string
    center?: boolean
}

// Styled
const StyledFormFooter = styled.div<StyledFormFooterProps>`
    border-top: ${({ brdrTop }) => brdrTop};
    padding: ${({ padding }) => padding};
    
    display: ${({ center }) => center ? 'flex' : ''}; 
    align-items: ${({ center }) => center ? 'center' : ''};
    justify-content: ${({ center }) => center ? 'center' : ''};
`

// ComponentProps
interface FormFooterProps {
    brdrTop?: string
    padding?: string
    center?: boolean
}

export const FormFooter: FC<FormFooterProps> = (props) => {
    return <StyledFormFooter {...props}/>
};
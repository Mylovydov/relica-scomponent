import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledFormGroupProps {
    mTop?: string
}
// Styled
const StyledFormGroup = styled.div<StyledFormGroupProps>`
    position: relative;

    &:not(:first-child) {
        margin-top: ${props => props.mTop || '2.5rem'};
    }
`
// ComponentProps
interface FormGroupProps {
    mTop?: string
}

export const FormGroup: FC<FormGroupProps> = (props) => {
    return (
        <StyledFormGroup {...props}/>
    );
};
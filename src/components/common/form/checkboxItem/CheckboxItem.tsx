import React, {FC} from "react";
import styled from "styled-components";

import { baseTheme } from "../../../../styles/theme";

// StyledProps

// Styled
const StyledCheckboxItem = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
`

const StyledCheckboxInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    position: absolute;

    &:checked+label:before {
        background-color: ${baseTheme.colors.primary};

    }

    &:checked+label:after {
        background-color: ${baseTheme.colors.primary};
        opacity: 1;
    }
`

const StyledCheckboxLabel = styled.label`
    font-size: 1.6rem;
    color: ${baseTheme.colors.black};
    line-height: 130%;
    font-weight: 400;

    padding-left: 3.2rem;
    display: flex;
    align-items: center;

    cursor: pointer;

    &:before {
        content: "";
        display: block;
        width: 2.2rem;
        height: 2.2rem;

        border: .2rem solid ${baseTheme.colors.primary};
        border-radius: .4rem;
        background-color:${baseTheme.colors.white};

        position: absolute;
        top: 50%;
        left: 0;
        z-index: 1;

        transform: translateY(-50%);
        transition: background-color .2s linear, border .2s linear;
    }

    &:after {
        content: "";
        display: block;
        width: 1.6rem;
        height: 1.4rem;

        background: url("/assets/icons/check.svg") no-repeat;
        background-size: 1.5rem 1.5rem;
        opacity: 0;

        position: absolute;
        top: 50%;
        left: .4rem;
        z-index: 2;
        transform: translateY(-50%);

        transition: opacity .2s linear;
    }
`

// ComponentProps
interface CheckboxProps {
    checkboxId: string,
    checkboxLabelFor: string,
    checkboxName: string
}

export const CheckboxItem: FC<CheckboxProps> = ({checkboxId, checkboxLabelFor, checkboxName, children}) => {
    return (
        <StyledCheckboxItem>
            <StyledCheckboxInput
                type="checkbox"
                name={checkboxName}
                id={checkboxId}
            />
            <StyledCheckboxLabel  
                htmlFor={checkboxLabelFor}
            >
                {children}
            </StyledCheckboxLabel>
        </StyledCheckboxItem>
    )
}
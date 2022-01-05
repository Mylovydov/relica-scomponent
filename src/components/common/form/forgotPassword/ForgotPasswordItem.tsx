import React, {FC} from "react";
import styled from "styled-components";

import { baseTheme } from "../../../../styles/theme";

// StyledProps
// Styled
const StyledForgotPasswordItem = styled.div`
    color: ${baseTheme.colors.primary};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 130%;

    transition: color .2s linear;
    cursor: pointer;

    span {
        font-size: 1.6rem;
        font-weight: 500;
        color: #10A5F5;
        line-height: 131%;
        display: block;
        transition: all 0.2s linear;
    }

    &:hover {
        color: ${baseTheme.colors.primaryDarken};
    }
`
// ComponentProps


export const ForgotPasswordItem: FC = ({ children }) => {
    return (
        <>
            <StyledForgotPasswordItem>
               <span>{children}</span>
            </StyledForgotPasswordItem>
        </>
    )
}
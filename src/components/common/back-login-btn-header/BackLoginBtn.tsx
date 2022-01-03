import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../styles/theme';

// StyledProps

// Styled
const StyledBackBtn = styled.div`
    button {
        display: inline-flex;
        align-items: center;

        position: relative;
        padding-left: 3em;
        color: ${baseTheme.colors.primary};
        font-weight: 500;
        font-size: 1.5rem;
        height: 2.5rem;

        transition: color .2s linear;

        &:before {
            content: "";
            display: block;
            position: absolute;
            top: 46%;
            left: 0;
            width: 2.5rem;
            height: 2.5rem;
            z-index: 1;
            transform: translateY(-50%);

            background: url("/assets/icons/arrow.svg") no-repeat;
            background-size: 1.8em 1.8em;

            transition: background .2s linear;
        }

        &:hover {
            color: ${baseTheme.colors.primaryDarken};

            &:before {
                background: url("/assets/icons/arrow_darken.svg") no-repeat;
                background-size: 1.8em 1.8em;
            }
        }
    }
`

// ComponentProps

export const BackBtn: FC = ({ children }) => {
    return (
        <StyledBackBtn>
            <button>
                {children}
            </button>
        </StyledBackBtn>
    )
}
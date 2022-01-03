import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { baseTheme } from '../../../styles/theme';


export enum BtnVariants {
    blue = 'blue',
    disabled = 'disabled'
}

// StyledProps
interface StyledBtnProps {
    btnVariant?: string,
    height?: string,
    width?: string
}

// Styled
const StyledBtn = styled.button<StyledBtnProps>`
    cursor: ${props => props.btnVariant === 'disabled' ? 'auto' : 'pointer'};
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    color: ${props => props.btnVariant ? baseTheme.colors.white : baseTheme.colors.secondary};
    font-family: inherit;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 5rem;
    border: ${props => props.btnVariant ? 'none' : '.06em solid #AFAFAF'};
    background: ${props => {
        if (props.btnVariant) {
            switch (props.btnVariant) {
                case 'blue':
                    return 'linear-gradient(45deg, #39dbff, #28a5f5)'
                case 'disabled':
                    return '#D1DCDE'
                default:
                    return 'transparent'
            }
        }
        return 'transparent'
    }};
    height: ${props => props.height || '3.5em'};
    width: ${props => props.width || '100%'};

    position: relative;
    z-index: 9;
    transition: all .2s linear;

    &:after {
        content: "";
        border-radius: 50px;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity .2s linear;
        background: linear-gradient(45deg, #00AECB, #0B91D9);
    }

    @media (min-width: ${baseTheme.media.md2}) {
        &:hover {
            border: ${props => props.btnVariant ? 'none' : '.06em solid #959595'};
            color: ${props => props.btnVariant ? baseTheme.colors.white : '#717171'};

            &:after {
                ${props => {
                    if (props.btnVariant === 'blue') {
                        return 'opacity: 1; box-shadow: 0px 0px 20px #10A5F559;'
                    }
                }}
            }
        }
    }
`

// ComponentProps
interface BtnProps {
    type?: "button" | "submit" | "reset",
    as?: 'button' | 'div',
    btnVariant?: BtnVariants
}

export const Btn: FC<BtnProps> = ({type, as, btnVariant, children}) => {
    return (
        <>
            <StyledBtn
                type={type}
                as={as}
                btnVariant={btnVariant}
            >
                {children}
            </StyledBtn>
        </>
    )
}
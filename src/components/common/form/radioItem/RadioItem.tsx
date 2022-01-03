import React, { FC } from 'react';
import styled from 'styled-components';

import { FormGroup } from '../FormGroup'; 
import { baseTheme } from '../../../../styles/theme';


// StyledProps

// Styled
const StyledRadioItem = styled.div`
    position: relative;
`

const StyledRadioInput = styled.input`
    appearance: none;
    position: absolute;

    &:checked+label:before {
        border: .1rem solid ${baseTheme.colors.primary};
    }

    &:checked+label:after {
        background-color: ${baseTheme.colors.primary};
        opacity: 1;
    }

    &:checked+label {
        border: .1rem solid ${baseTheme.colors.primary};
        opacity: 1;
    }
`

const StyledRadioLabel = styled.label`
    font-size: 1.6rem;
    color: ${baseTheme.colors.black};
    line-height: calc((2.1rem / 1.6rem) * 100%);
    font-weight: 500;

    padding-left: 6rem;
    display: flex;
    align-items: center;

    height: 8.8rem;
    width: 100%;

    border: 1px solid #DBDBDB;
    border-radius: 1rem;

    transition: all .2s linear;

    cursor: pointer;

    &:before {
        content: "";
        display: block;
        width: 1.6rem;
        height: 1.6rem;

        border: 1px solid #AFAFAF;
        border-radius: 50%;
        background-color: ${baseTheme.colors.white};

        position: absolute;
        top: 50%;
        left: 3rem;
        z-index: 1;

        transform: translateY(-50%);
    }

    &:after {
        content: "";
        display: block;
        width: 1rem;
        height: 1rem;

        background-color: ${baseTheme.colors.primary};
        border-radius: 50%;
        overflow: hidden;
        opacity: 0;

        position: absolute;
        top: 50%;
        left: 3.3rem;
        z-index: 2;
        transform: translateY(-50%);

        transition: opacity .2s linear;
    }

    span {
        display: inline-block;
        position: relative;
        width: 7rem;
        height: 4.5rem;

        margin: 0 1.6rem 0 0;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            object-fit: cover;
        }
    }

    &:hover {
        border: 1px solid #10A5F52F;
        background-color: #F0F9FD;
    }

    @media (max-width: ${baseTheme.media.md4}) {
        height: 7rem;
    }
`

// ComponentProps
interface WalletItemProps {
    radioId: string,
    radioFor: string,
    radioImg: string,
    radioAlt: string,
    radioName: string
}

export const RadioItem: FC<WalletItemProps> = (
    {
        radioId,
        radioFor,
        radioImg,
        radioAlt,
        radioName,
        children
    }
    ) => {

    return (
        <FormGroup>
            <StyledRadioItem>
                <StyledRadioInput type="radio" name={radioName} id={radioId} />
                <StyledRadioLabel htmlFor={radioFor}>
                    <span>
                        <img src={radioImg} alt={radioAlt} />
                    </span>
                    {children}
                </StyledRadioLabel>
            </StyledRadioItem>
        </FormGroup>
    )
}
import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';
import { StyledSubtitleText } from '../../typography/Typography1';

// StyledProps
interface StyledTabsControllBtnProps {
    flex?: string
}

// Styled
const StyledTabsControllBtn = styled.button<StyledTabsControllBtnProps>`
    flex: ${({ flex = '1 1 33.3333%'}) => flex};
    padding: 1rem .5rem;
    position: relative;

    transition: all .2s linear;

    &:after {
        content: "";
        position: absolute;
        bottom: -.2rem;
        left: 0;
        right: 0;
        height: 0.3rem;
        background-color: ${({ theme }) => theme.colors.tabsControlBrdr};
        width: 0;
        transition: all .2s linear;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }

    /* .tabs-btn-active {
        color: ${({ theme }) => theme.colors.primary};
        &:after {
            background-color: ${({ theme }) => theme.colors.primary};
            width: 100%;
        }
    } */
`
// ComponentProps
interface TabsControllBtnProps {
    btnText: string 
    flex?: string
}

export const TabsControllBtn: FC<TabsControllBtnProps> = ({btnText, ...props}) => {
    return (
        <StyledTabsControllBtn {...props}>
            <StyledSubtitleText
                color={baseTheme.colors.gray}
            >
                {btnText}
            </StyledSubtitleText>
        </StyledTabsControllBtn>
    );
};
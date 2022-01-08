import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';

// StyledProps

// Styled
const StyledUserInfoProfileInformation = styled.div`
    text-align: center;

    span {
        transition: all 0.2s linear;
        cursor: pointer;
        margin: 2rem 0 0 0;
        display: block;

        &:hover {
            color: ${baseTheme.colors.primaryDarken};
        }
    }

    p {
        margin: .7rem 0 0 0;
    }
`

// ComponentProps

export const UserInfoProfileInformation: FC = (props) => {
    return <StyledUserInfoProfileInformation {...props}/>
};
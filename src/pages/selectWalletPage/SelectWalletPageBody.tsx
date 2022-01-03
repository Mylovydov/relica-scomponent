import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledSelectWalletPageBody = styled.div`
`

// ComponentProps

export const SelectWalletPageBody: FC = ({children}) => {
    return (
        <StyledSelectWalletPageBody>
            {children}
        </StyledSelectWalletPageBody>
    );
};
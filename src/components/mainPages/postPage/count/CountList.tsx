import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
// Styled
const StyledCountList = styled.ul`
    display: inline-flex;
    align-items: center;
`
// ComponentProps


export const CountList: FC = ({children}) => {
    return (
        <StyledCountList>
            {children}
        </StyledCountList>
    );
};
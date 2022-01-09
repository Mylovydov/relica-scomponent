import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledDetailPostPageBody = styled.div`
    display: flex;
    min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeigth}rem);
`
// ComponentProps


export const DetailPostPageBody: FC = (props) => {
    return <StyledDetailPostPageBody {...props}/>
};
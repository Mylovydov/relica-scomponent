import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledDetailPostPageContent = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    border-left: .1rem solid ${({ theme }) => theme.colors.chatBorder};
`
// ComponentProps

export const DetailPostPageContent: FC = (props) => {
    return <StyledDetailPostPageContent {...props}/>
};
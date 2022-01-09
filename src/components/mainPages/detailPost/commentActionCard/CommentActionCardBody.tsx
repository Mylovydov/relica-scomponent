import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledCommentActionCardBody = styled.div`
    border-bottom: .1rem solid ${({ theme }) => theme.colors.chatBorder};
    flex: 1 1 auto;
`
// ComponentProps


export const CommentActionCardBody: FC = (props) => {
    return <StyledCommentActionCardBody {...props}/>
};
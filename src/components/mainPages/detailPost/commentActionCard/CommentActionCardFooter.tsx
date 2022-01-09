import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledCommentActionCardFooter = styled.div`
    padding: 5rem 2.5rem 0;
    flex: 0 0 38%;
`
// ComponentProps

export const CommentActionCardFooter: FC = (props) => {
    return <StyledCommentActionCardFooter {...props}/>
};
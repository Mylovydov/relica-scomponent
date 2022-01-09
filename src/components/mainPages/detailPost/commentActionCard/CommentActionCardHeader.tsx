import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledCommentActionCardHeader = styled.div`
    padding: 2.5rem 2.5rem 0;
    margin: 0 0 3.5rem 0;
    flex: 0 0 20%;

    >p {
        margin: 3rem 0 0 0;
    }
`
// ComponentProps


export const CommentActionCardHeader: FC = (props) => {
    return <StyledCommentActionCardHeader {...props}/>
};
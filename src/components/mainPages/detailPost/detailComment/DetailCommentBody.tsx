import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledDetailCommentBody = styled.div`
    padding: 2.5rem 2.5rem;
`
// ComponentProps


export const DetailCommentBody: FC = (props) => {
    return <StyledDetailCommentBody {...props}/>
};
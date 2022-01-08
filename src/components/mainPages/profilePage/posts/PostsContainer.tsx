import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
// Styled
const StyledPostsContainer = styled.div`
    max-width: 100rem;
    margin: 0 auto;
    padding: 0 1.5rem;
`
// ComponentProps

export const PostsContainer: FC = (props) => {
    return <StyledPostsContainer {...props}/>
};
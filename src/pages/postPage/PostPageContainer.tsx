import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPostPageContainer = styled.div`
   max-width: 80rem;
   margin: 0 auto;
   width: 100%;
   padding: 0 1.5rem;
`

/* ComponentProps */

export const PostPageContainer: FC = (props) => {
   return <StyledPostPageContainer {...props}/>
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPostPageContainer = styled.div`
   max-width: 77rem;
`

// ComponentProps

export const PostPageContainer: FC = (props) => {
   return <StyledPostPageContainer {...props}/>
};
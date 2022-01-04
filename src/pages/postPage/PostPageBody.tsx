import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPostPageBody = styled.div`
   padding-top: 6rem;
`
// ComponentProps


export const PostPageBody: FC = (props) => {
   return <StyledPostPageBody {...props}/>
};
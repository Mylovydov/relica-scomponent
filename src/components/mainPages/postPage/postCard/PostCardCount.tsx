import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledPostCardCountProps {
   margin?: string
}
// Styled
const StyledPostCardCount = styled.div<StyledPostCardCountProps>`
   margin: ${({ margin }) => margin || '0 0 3rem 0'};
`
// ComponentProps
interface PostCardCountProps {
   margin?: string
}

export const PostCardCount: FC<PostCardCountProps> = (props) => {
   return <StyledPostCardCount {...props}/>
};
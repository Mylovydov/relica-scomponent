import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledPostCardHeaderProps {
   margin?: string
}

// Styled
const StyledPostCardHeader = styled.div<StyledPostCardHeaderProps>`
   margin: ${({ margin }) => margin || '0 0 3rem 0'};

   >p {
      margin-top: 3rem;
      color: ${({ theme }) => theme.colors.black};
      font-size: 1.6rem;
      line-height: 130%;
   }
`
// ComponentProps
interface PostCardHeaderProps {
   margin?: string
}


export const PostCardHeader: FC<PostCardHeaderProps> = (props) => {
   return <StyledPostCardHeader {...props}/>
};

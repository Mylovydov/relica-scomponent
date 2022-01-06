import React, { FC } from 'react';

import styled from 'styled-components';
import { PostListItem } from './PostListItem';

export type postComment = { name: string, comment: string }

type dataItem = {
   avatar: string, 
   name: string, 
   userComment: string, 
   likes: string, 
   totalComments: string,
   postComments: postComment[]
}

// StyledProps

// Styled
const StyledPostsList = styled.ul`
   
`
// ComponentProps
interface PostsListProps {
   dataItems: dataItem[]
}

export const PostsList: FC<PostsListProps> = ({dataItems}) => {
   const PostsListItem = dataItems.map((persone, i) => {
      return <PostListItem {...persone} key={i} />
   })

   return (
      <StyledPostsList>
         {PostsListItem}
      </StyledPostsList>
   )
};
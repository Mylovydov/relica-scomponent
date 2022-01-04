import React, { FC } from 'react';
import styled from 'styled-components';
import { PostListItem } from './PostListItem';

type dataItem = {avatar: string, name: string, comment: string}

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
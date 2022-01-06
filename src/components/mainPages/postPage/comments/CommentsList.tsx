import React, { FC } from 'react';
import styled from 'styled-components';

import { postComment } from '../PostsList'
import { CommentsItem } from './CommentsItem';


// StyledProps
interface StyledCommentsListProps {
   margin?: string
}

// Styled
const StyledCommentsList = styled.ul<StyledCommentsListProps>`
   margin: ${({ margin = '0' }) => margin};
`
// ComponentProps
interface CommentsListProps {
   margin?: string
   dataComments: postComment[]
}

export const CommentsList: FC<CommentsListProps> = ({margin, dataComments}) => {
   const comments = dataComments.map((commentItem, i) => {
      return <CommentsItem name={commentItem.name} userComment={commentItem.comment} key={i}/>
   })
   return (
      <StyledCommentsList margin={margin}>
         {comments}
      </StyledCommentsList>
   )
};
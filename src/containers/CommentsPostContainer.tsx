import React, { FC } from 'react';

import { Comments } from '../components/mainPages/postPage/comments/Comments';
import { CommentsList } from '../components/mainPages/postPage/comments/CommentsList';
import { StyledSubtitleText } from '../components/typography/Typography1';

import { postComment } from '../components/mainPages/postPage/PostsList'
import { TextareaItem } from '../components/common/form/textareaInputItem/TextareaItem';


interface CommentsPostContainerProps {
   dataComments: postComment[]
}
export const CommentsPostContainer: FC<CommentsPostContainerProps> = ({dataComments}) => {
   return (
      <Comments>
         <StyledSubtitleText as='h6'>
            View 5 comments
         </StyledSubtitleText>

         <CommentsList dataComments={dataComments}/>
         <TextareaItem
            inputName={"post-comment"}
            placeholder={"Add comments"}
         />
      </Comments>
   );
};
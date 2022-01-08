import React, { FC } from 'react';

import styled from 'styled-components';

import { Persone } from '../../common/persone/Persone';
import { Count } from '../../common/count/Count';
import { PhotoSlider } from './PhotoSlider/PhotoSlider';

import { PostCard } from './postCard/PostCard';
import { PostCardBody } from './postCard/PostCardBody'
import { PostCardCount } from './postCard/PostCardCount';
import { PostCardFooter } from './postCard/PostCardFooter';
import { PostCardHeader } from './postCard/PostCardHeader'
import { PostCardPhotoSlider } from './postCard/PostCardPhotoSlider';
import { StyledBodyText } from '../../typography/Typography1'
import { CommentsPostContainer } from '../../../containers/CommentsPostContainer';

import { postComment } from './PostsList'

// StyledProps
interface StyledPostListItemProps {
   margin?: string
}
// Styled
const StyledPostListItem = styled.li<StyledPostListItemProps>`
   margin: ${({ margin }) => margin || '0 0 8rem 0'};
`

// ComponentProps
interface PostListItemProps {
   margin?: string

   avatar: string
   name: string
   userComment?: string
   likes: string
   totalComments: string
   postComments: postComment[]
}

export const PostListItem: FC<PostListItemProps> = (
   {
      margin,

      avatar,
      name,
      userComment,
      postComments,
      ...props
      
   }
   ) => {
   return (
      <StyledPostListItem margin={margin}>
         <PostCard>
            <PostCardBody>

               <PostCardHeader>
                  <Persone
                     imagePath={avatar}
                     innerMargin={'0 1.5rem 0 0'}
                     personeName={name}
                     personeSubtitleText={'3 minute ago'}
                  />
                  <StyledBodyText>
                     {userComment}
                  </StyledBodyText>

               </PostCardHeader>

               <PostCardPhotoSlider>
                  <PhotoSlider/>
               </PostCardPhotoSlider>

               <PostCardCount>
                  <Count {...props}/>
               </PostCardCount>

               <PostCardFooter>
                  <CommentsPostContainer dataComments={postComments}/>
               </PostCardFooter>

            </PostCardBody>
         </PostCard>
      </StyledPostListItem>
   );
};
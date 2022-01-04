import React, { FC } from 'react';

import styled from 'styled-components';
import { Persone } from '../../common/persone/Persone';

import { PostCard } from './postCard/PostCard';
import { PostCardBody } from './postCard/PostCardBody'
import { PostCardCount } from './postCard/PostCardCount';
import { PostCardFooter } from './postCard/PostCardFooter';
import { PostCardHeader } from './postCard/PostCardHeader'
import { PostCardPhotoSlider } from './postCard/PostCardPhotoSlider';


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
   margin?: string,
   avatar: string,
   name: string,
   comment?: string
}

export const PostListItem: FC<PostListItemProps> = (
   {
      margin,
      avatar,
      name,
      comment
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
                     personeSubtitle={'3 minute ago'}
                  />
                  <p>{comment}</p>
               </PostCardHeader>

               <PostCardPhotoSlider>

               </PostCardPhotoSlider>

               <PostCardCount>

               </PostCardCount>

               <PostCardFooter>

               </PostCardFooter>

            </PostCardBody>
         </PostCard>
      </StyledPostListItem>
   );
};
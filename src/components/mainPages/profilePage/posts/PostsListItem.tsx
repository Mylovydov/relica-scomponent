import React, { FC } from 'react';

import styled from 'styled-components';
import { PostImage } from '../../../common/postImage/PostImage';


// StyledProps

// Styled
const StyledPostsListItem = styled.li`
    border-radius: 1rem;
    overflow: hidden;
`
// ComponentProps
interface UserPostsListItemProps {
    postImage: string
    postTotalLikes: string
    postTotalComments: string
}
export const UserPostsListItem: FC<UserPostsListItemProps> = (
    {
        postImage,
        postTotalLikes,
        postTotalComments
    }
) => {
    return (
        <StyledPostsListItem>
            <PostImage
                imgPath={postImage}
                postTotalLikes={postTotalLikes}
                postTotalComments={postTotalComments}
            />
        </StyledPostsListItem>
    );
};
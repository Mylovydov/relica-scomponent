import React, { FC } from 'react';

import styled from 'styled-components';
import { PostImage } from '../../../common/postImage/PostImage';


// StyledProps

// Styled
const StyledPostsListItem = styled.li`

`
// ComponentProps
interface UserPostsListItemProps {
    postImage: string
    postTotalLikes: string
    postTotalComments: string
}
export const UserPostsListItem: FC<UserPostsListItemProps> = (
    {
        postImage
    }
) => {
    return (
        <li>
            <PostImage
                imgPath={postImage}
            />
        </li>
    );
};
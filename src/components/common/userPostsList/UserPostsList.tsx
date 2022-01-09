import React, { FC } from 'react';

import styled from 'styled-components';
import { UserPostsListItem } from './UserPostsListItem'
import { userPost } from '../../../containers/ProfilePageContainer';
// StyledProps

// Styled
const StyledPostsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28.5rem, 1fr));
    grid-gap: 1rem;
`
// ComponentProps
interface PostsListProps {
    data?: userPost[]
}

export const UserPostsList: FC<PostsListProps> = ({ data }) => {
    
    const posts = data?.map((post, i) => {
        return <UserPostsListItem {...post} key={i}/>
    })

    return (
        <StyledPostsList>
            {posts}
        </StyledPostsList>
    );
};
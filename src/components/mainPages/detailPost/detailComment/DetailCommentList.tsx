import React, { FC } from 'react';

import styled from 'styled-components';

import { postCommentitem } from '../../../../containers/DetailPostPageContainer';
import { DetailCommentListItem } from './DetailCommentListItem';

// StyledProps

// Styled

// ComponentProps
interface DetailCommentListProps {
    data: postCommentitem[]
}

export const DetailCommentList: FC<DetailCommentListProps> = ({ data }) => {

    const commentsList = data.map(({commentAuthor, commentAuthorAvatar, comment, commentPublishTime}, i) => {
        return <DetailCommentListItem 
            avatarPath={commentAuthorAvatar}
            authorCommentName={commentAuthor}
            commentText={comment}
            commentPublishTime={commentPublishTime}
        />
    })

    return (
        <ul>
            {commentsList}
        </ul>
    );
};
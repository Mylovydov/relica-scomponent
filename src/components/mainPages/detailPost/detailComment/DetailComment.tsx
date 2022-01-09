import React, { FC } from 'react';

import { DetailCommentBody } from './DetailCommentBody';
import { DetailCommentList } from './DetailCommentList';

import { postCommentitem } from '../../../../containers/DetailPostPageContainer'

// StyledProps

// Styled

// ComponentProps
interface DetailCommentProps {
    data: postCommentitem[]
}

export const DetailComment: FC<DetailCommentProps> = ({ data }) => {
    return (
        <div>
            <DetailCommentBody>
                <DetailCommentList data={data}/>
            </DetailCommentBody>
        </div>
    );
};
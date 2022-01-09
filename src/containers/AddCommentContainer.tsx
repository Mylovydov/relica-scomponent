import React, { FC } from 'react';
import { Form } from '../components/common/form/Form';
import { TextareaItem } from '../components/common/form/textareaInputItem/TextareaItem';

import { CommentActionCardBody } from '../components/mainPages/detailPost/commentActionCard/CommentActionCardBody';
import { CommentActionCardFooter } from '../components/mainPages/detailPost/commentActionCard/CommentActionCardFooter';
import { DetailComment } from '../components/mainPages/detailPost/detailComment/DetailComment';
import { postCommentitem } from '../containers/DetailPostPageContainer'

interface AddCommentContainerProps {
    data: postCommentitem[]
}

export const AddCommentContainer: FC<AddCommentContainerProps> = ({ data }) => {
    return (
        <>
            <CommentActionCardBody>
                <DetailComment data={data}/>
            </CommentActionCardBody>
    
            <CommentActionCardFooter>
                <Form action={'#'}>
                    <TextareaItem
                        inputName={'addComment'}
                        placeholder={'Add comments'}
                    />
                </Form>
            </CommentActionCardFooter>
        </>
    );
};
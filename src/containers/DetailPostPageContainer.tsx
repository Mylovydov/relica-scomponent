import React, { FC } from 'react';

import { Container } from '../components/common/container/Container';
import { ImageItem } from '../components/common/imageItem/ImageItem';
import { Persone } from '../components/common/persone/Persone';
import { CommentActionCard } from '../components/mainPages/detailPost/commentActionCard/CommentActionCard';
import { CommentActionCardHeader } from '../components/mainPages/detailPost/commentActionCard/CommentActionCardHeader';
import { StyledBodyText } from '../components/typography/Typography1';
import { DetailPostPage } from '../pages/detailPostPage/DetailPostPage';
import { DetailPostPageBody } from '../pages/detailPostPage/DetailPostPageBody';
import { DetailPostPageContent } from '../pages/detailPostPage/DetailPostPageContent';
import { DetailPostPagePhoto } from '../pages/detailPostPage/DetailPostPagePhoto';
import { AddCommentContainer } from './AddCommentContainer';

export type postCommentitem = {commentAuthor: string, commentAuthorAvatar: string, comment: string, commentPublishTime: string}

const postData = {
    authorName: 'Max Richardson',
    postPublishTime: '3 minute ago',
    postDescr: 'Japanese food with my friends Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ali',
    postComments: [
        {commentAuthor: 'John Smith', commentAuthorAvatar: '/assets/chat-avatar/chat-avatar-6.webp' ,comment: 'This looks delicious!', commentPublishTime: '3 minute ago'},
        {commentAuthor: 'John Smith', commentAuthorAvatar: '/assets/chat-avatar/chat-avatar-6.webp' ,comment: 'This looks delicious!', commentPublishTime: '3 minute ago'},
    ]
}


export const DetailPostPageContainer: FC = () => {

    const {
        authorName,
        postPublishTime,
        postDescr,
        postComments

    } = postData

    return (
        <DetailPostPage>
            <Container>
                <DetailPostPageBody>

                    <DetailPostPagePhoto>
                        <ImageItem
                            imgPath={'/assets/post-image/post-img-3.webp'}
                            minHeight={'25rem'}
                            brdRadius={'1rem'}
                            paddingBot={'112.5%'}
                        />
                    </DetailPostPagePhoto>

                    <DetailPostPageContent>

                        <CommentActionCard>
                            <CommentActionCardHeader>
                                <Persone
                                    imagePath={'/assets/profile.png'}
                                    imgSize={'5.6rem'}
                                    personeName={authorName}
                                    personeSubtitleText={postPublishTime}
                                />
                                <StyledBodyText>
                                    {postDescr}
                                </StyledBodyText>
                            </CommentActionCardHeader>

                            <AddCommentContainer data={postComments}/>
                        </CommentActionCard>

                    </DetailPostPageContent>

                </DetailPostPageBody>
            </Container>
        </DetailPostPage>
    );
};
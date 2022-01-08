import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';
import { Count } from '../count/Count';
import { Image } from '../Image/Image';
import { PostImageStatistics } from './PostImageStatistics';

// StyledProps
// Styled
const StyledPostImage = styled.div`
    position: relative;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.postImageHoverBg};

`
// ComponentProps
interface PostImageProps {
    imgPath: string
    postTotalLikes: string
    postTotalComments: string
}

export const PostImage: FC<PostImageProps> = (
    {
        imgPath,
        postTotalLikes,
        postTotalComments
    }
) => {
    return (
        <StyledPostImage>
            <Image 
                imgPath={imgPath}
                paddingBot={'99.85%'}
                hover
            />

            <PostImageStatistics>
                <Count
                    likes={postTotalLikes}
                    totalComments={postTotalComments}
                    iconPath1={'/assets/icons/white_heart.svg'}
                    iconPath2={'/assets/icons/message_white.svg'}
                    iconWidth={'0 0 4rem'}
                    iconHeigth={'4rem'}
                    iconImgSize={'3.2rem'}
                    fontSize={'3rem'}
                    color={baseTheme.colors.white}
                    fontWeight={'500'}
                    marginBetweenItems={'0 7rem 0 0'}
                />
            </PostImageStatistics>
        </StyledPostImage>
    );
};
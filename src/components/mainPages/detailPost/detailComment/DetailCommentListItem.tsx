import React, { FC } from 'react';

import styled from 'styled-components';
import { Avatar } from '../../../common/avatar/Avatar';
import { Persone } from '../../../common/persone/Persone';
import { StyledBodyText, StyledCaptionText, StyledTitleText } from '../../../typography/Typography1';

// StyledProps
interface StyledDetailCommentListItemProps {
    margin?: string
}

// Styled
const StyledDetailCommentListItem = styled.li<StyledDetailCommentListItemProps>`
    margin: ${({ margin = '0 0 2.5rem 0'}) => margin};
    display: flex;
    align-items: center;
`
const StyledDetailCommentListItemImage = styled.div`
    flex: 0 0 3.6rem;
    margin-right: 1.5rem;
    align-self: start;
`
const StyledStyledDetailCommentListItemText = styled.div`
    flex: 1 1 auto;

    h4 {
        margin: .5rem 0 0 0;
    }

    p {
        margin: 1.5rem 0 0 0;
    }

    span {
        margin: .5rem 0 0 0;
        display: block;
    }
`

// ComponentProps
interface DetailCommentListItemProps {
    avatarPath: string
    authorCommentName: string
    commentText: string
    commentPublishTime: string
}

export const DetailCommentListItem: FC<DetailCommentListItemProps> = (
    {
        avatarPath,
        authorCommentName,
        commentText,
        commentPublishTime
    }
) => {
    return (
        <StyledDetailCommentListItem>
            <StyledDetailCommentListItemImage>
                <Avatar
                    imagePath={avatarPath}
                    imgSize={'3.6rem'}
                />
            </StyledDetailCommentListItemImage>

            <StyledStyledDetailCommentListItemText>
                <StyledTitleText
                    as='h4'
                    fontSize={'2rem'}
                    md2FontSize={'2rem'}
                    md3FontSize={'2rem'}
                    md4FontSize={'2rem'}
                >
                    {authorCommentName}
                </StyledTitleText>

                <StyledBodyText>
                    {commentText}
                </StyledBodyText>

                <StyledCaptionText
                    as='span'
                    fontSize={'1.6rem'}
                >
                    {commentPublishTime}
                </StyledCaptionText>
            </StyledStyledDetailCommentListItemText>
        </StyledDetailCommentListItem>
    );
};
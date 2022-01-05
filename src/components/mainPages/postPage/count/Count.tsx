import React, { FC } from 'react';

import styled from 'styled-components';
import { PostStatistics } from '../../../common/postStatistics/PostStatistics';

import { CountList } from './CountList';
import { CountListItem } from './CountListItem';

// StyledProps

// Styled
const StyledCount = styled.div``

// ComponentProps
interface CountProps {
    likes: string,
    totalComments: string
}

export const Count: FC<CountProps> = ({ likes, totalComments}) => {
    return (
        <StyledCount>
            <CountList>
                <CountListItem margin={'0 5rem 0 0'}>
                    <PostStatistics
                        iconPath={'assets/icons/favorite.svg'}
                        children={likes}
                    />
                </CountListItem>
                <CountListItem>
                    <PostStatistics
                        iconPath={'assets/icons/comment.svg'}
                        children={totalComments}
                    />
                </CountListItem>
            </CountList>
        </StyledCount>
    );
};
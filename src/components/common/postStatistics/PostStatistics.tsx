import React, { FC } from 'react';

import styled from 'styled-components';
import { PostStatisticsActivity } from './PostStatisticsActivity';

import { PostStatisticsIcon } from './PostStatisticsIcon';

// StyledProps
// Styled

const StyledPostStatistics = styled.div`
    display: flex;
    align-items: center;
`
// ComponentProps
interface PostStatisticsProps {
    iconPath: string,
    children: string
}

export const PostStatistics: FC<PostStatisticsProps> = ({ iconPath, children }) => {
    return (
        <StyledPostStatistics>
            <PostStatisticsIcon iconPath={iconPath}/>
            <PostStatisticsActivity children={children}/>
        </StyledPostStatistics>
    );
};
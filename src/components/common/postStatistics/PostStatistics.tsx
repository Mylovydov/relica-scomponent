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
// interface PostStatisticsProps {
//     iconPath: string,
// }

export const PostStatistics: FC = (props) => {
    return <StyledPostStatistics {...props} />
};
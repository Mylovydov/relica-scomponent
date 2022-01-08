import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledPostStatisticsCountProps {
    fontSize?: string,
    color?: string
    fontWeight?: string
}

// Styled
const StyledPostStatisticsCount = styled.span<StyledPostStatisticsCountProps>`
    display: block;
    flex: 1 1 auto;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: ${({ fontWeight = '400' }) => fontWeight};
    line-height: 130%;
    color: ${({ theme, ...props }) => props.color || theme.colors.black};
`
// ComponentProps
interface PostStatisticsCountProps {
    fontSize?: string
    color?: string
    fontWeight?: string
}

export const PostStatisticsActivity: FC<PostStatisticsCountProps> = (props) => {
    return <StyledPostStatisticsCount {...props}/>
};
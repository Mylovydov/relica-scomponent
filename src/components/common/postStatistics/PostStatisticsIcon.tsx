import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledPostStatisticsIcon = styled.span`
    flex: 0 0 2.2rem;
    margin-right: 0.5rem;
    position: relative;
    height: 2.2rem;

    img {
        position: absolute;
        top: 50%;
        left: 0;
        width: 2.2rem;
        height: 2.2rem;

        transform: translateY(-50%);
    }
`
// ComponentProps
interface PostStatisticsIconProps {
    iconPath: string,
    iconAlt?: string
}

export const PostStatisticsIcon: FC<PostStatisticsIconProps> = (
    {
        iconPath,
        iconAlt = 'icon'
    }
) => {
    return (
        <StyledPostStatisticsIcon>
            <img src={iconPath} alt={iconAlt} />
        </StyledPostStatisticsIcon>
    );
};
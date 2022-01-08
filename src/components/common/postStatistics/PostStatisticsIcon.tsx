import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledPostStatisticsIconProps {
    iconHeigth?: string
    iconWidth?: string
    iconImgSize?: string
}

// Styled
const StyledPostStatisticsIcon = styled.span<StyledPostStatisticsIconProps>`
    flex: ${({ iconWidth = '0 0 2.2rem' }) => iconWidth};
    margin-right: 0.5rem;
    position: relative;
    height: ${({ iconHeigth = '2.2rem' }) => iconHeigth};

    img {
        position: absolute;
        top: 50%;
        left: 0;
        width: ${({ iconImgSize = '2.2rem' }) => iconImgSize};
        height: ${({ iconImgSize = '2.2rem' }) => iconImgSize};

        transform: translateY(-50%);
    }
`
// ComponentProps
interface PostStatisticsIconProps {
    iconPath: string
    iconAlt?: string
    
    iconHeigth?: string
    iconWidth?: string
    iconImgSize?: string
}

export const PostStatisticsIcon: FC<PostStatisticsIconProps> = (
    {
        iconPath,
        iconAlt = 'icon',
        ...props
    }
) => {
    return (
        <StyledPostStatisticsIcon {...props}>
            <img src={iconPath} alt={iconAlt} />
        </StyledPostStatisticsIcon>
    );
};
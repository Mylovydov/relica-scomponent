import React, { FC } from 'react';

import styled from 'styled-components';
import { PostStatistics } from '../postStatistics/PostStatistics';
import { PostStatisticsActivity } from '../postStatistics/PostStatisticsActivity';
import { PostStatisticsIcon } from '../postStatistics/PostStatisticsIcon';

import { CountList } from './CountList';
import { CountListItem } from './CountListItem';

// StyledProps

// Styled

// ComponentProps
interface CountProps {
    // Content
    likes: string,
    totalComments: string

    // Icons
    iconPath1?: string
    iconPath2?: string

    // IconsSize
    iconHeigth?: string
    iconWidth?: string
    iconImgSize?: string

    // Activity props
    fontSize?: string
    color?: string
    fontWeight?: string

    // Items
    marginBetweenItems?: string
}

export const Count: FC<CountProps> = (
    {
        // Content
        likes, 
        totalComments, 
        
        // Icons
        iconPath1 = 'assets/icons/favorite.svg',
        iconPath2 = 'assets/icons/comment.svg',

        // IconsSize
        iconHeigth,
        iconWidth,
        iconImgSize,

        // Activity props
        fontSize,
        color,
        fontWeight,

        // Items
        marginBetweenItems
    }
    ) => {
    return (
        <>
            <CountList>

                <CountListItem margin={marginBetweenItems}>
                    <PostStatistics>
                        <PostStatisticsIcon
                            iconPath={iconPath1}
                            iconHeigth={iconHeigth}
                            iconWidth={iconWidth}
                            iconImgSize={iconImgSize}
                        />
                        <PostStatisticsActivity
                            children={likes}
                            fontSize={fontSize}
                            color={color}
                            fontWeight={fontWeight}
                        />
                    </PostStatistics>
                </CountListItem>

                <CountListItem>
                    <PostStatistics>
                        <PostStatisticsIcon 
                            iconPath={iconPath2} 
                            iconHeigth={iconHeigth}
                            iconWidth={iconWidth}
                            iconImgSize={iconImgSize}
                        />
                        <PostStatisticsActivity 
                            children={totalComments} 
                            fontSize={fontSize} 
                            color={color} 
                            fontWeight={fontWeight}
                        />
                    </PostStatistics>
                </CountListItem>

            </CountList>
        </>
    );
};
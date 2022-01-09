import React, { FC } from 'react';

import { Avatar } from '../../../common/avatar/Avatar';
import { StyledBodyText, StyledCaptionText, StyledSubtitleText } from '../../../typography/Typography1';
import { ActivityItem } from '../activityItem/ActivityItem';
import { ActivityItemBody } from '../activityItem/ActivityItemBody';
import { ActivityItemIcon } from './ActivityItemIcon';
import { ActivityItemImage } from './ActivityItemImage';
import { ActivityItemText } from './ActivityItemText';
import { ActivityItemTextMain } from './ActivityItemTextMain';

// StyledProps

// Styled

// ComponentProps

interface ActivityListItemProps {
    userName: string
    activityTime: string
    userAvatar?: string
    favoritePhoto?: string
    logStatus?: string
}

export const ActivityListItem: FC<ActivityListItemProps> = (
    {
        userName,
        activityTime,
        userAvatar,
        favoritePhoto,
        logStatus
    }
) => {

    const statusMessage = logStatus === 'like' ? 'liked your picture!' : 'started following you'
    const iconStatus = logStatus === 'like' ? '/assets/icons/favorite.svg' : '/assets/icons/activity-icon.svg'

    return (
        <li>
            <ActivityItem>
                <ActivityItemBody>

                    <ActivityItemIcon>
                        <Avatar
                            imagePath={iconStatus}
                            imgSize={'2.6rem'}
                            brdrRadius={'0'}
                            imgHeigth={'auto'}
                        />
                    </ActivityItemIcon>

                    <ActivityItemText>
                        <ActivityItemTextMain>
                            <StyledSubtitleText
                                as={'span'}
                            >
                               {userName}
                            </StyledSubtitleText>
                            <StyledBodyText>
                                {statusMessage}
                            </StyledBodyText>
                        </ActivityItemTextMain>

                        <StyledCaptionText>         
                            {activityTime}           
                        </StyledCaptionText>            
                    </ActivityItemText>

                    <ActivityItemImage>
                        <Avatar
                            imagePath={userAvatar || favoritePhoto ? userAvatar || favoritePhoto : '/assets/logo.png'}
                            imgSize={'5.6rem'}
                        />
                    </ActivityItemImage>
                    
                </ActivityItemBody>
            </ActivityItem>
        </li>
    );
};
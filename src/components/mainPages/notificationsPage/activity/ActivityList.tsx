import React, { FC } from 'react';

import { ActivityListItem } from './ActivityListItem';

import { ActivityPostItem } from '../../../../containers/NotificationsPageTabsContainer'

interface ActivityListProps {
    data: ActivityPostItem[]
}



export const ActivityList: FC<ActivityListProps> = ({ data }) => {

    const activityList = data.map((item, i) => {
        return <ActivityListItem {...item} key={i}/>
    })

    return (
        <ul>
            {activityList}
        </ul>
    );
};
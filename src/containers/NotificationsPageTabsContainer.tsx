import React, { FC } from 'react';

import { Tabs } from '../components/common/tabs/Tabs';
import { TabsBody } from '../components/common/tabs/TabsBody';
import { TabsControll } from '../components/common/tabs/TabsControll';
import { TabsControllBtn } from '../components/common/tabs/TabsControllBtn';
import { TabsItem } from '../components/common/tabs/TabsItem';
import { Activity } from '../components/mainPages/notificationsPage/activity/Activity';
import { ActivityBody } from '../components/mainPages/notificationsPage/activity/ActivityBody';
import { ActivityList } from '../components/mainPages/notificationsPage/activity/ActivityList';

export type ActivityPostItem = {
    userName: string, 
    activityTime: string, 
    userAvatar?: string, 
    favoritePhoto?: string, 
    // logStatus: 'like' | 'follow'
    logStatus: string

}

const activityPost = [
    {
        userName: 'PXL3000', 
        activityTime: '13m ago',
        userAvatar: '/assets/chat-avatar/chat-avatar-1.webp',
        logStatus: 'follow'
    },
    {
        userName: 'mikepradofoto', 
        activityTime: '13m ago',
        favoritePhoto: '/assets/post-image/post-img-3.webp',
        logStatus: 'like'
    },
    {
        userName: 'PXL3000', 
        activityTime: '13m ago',
        userAvatar: '/assets/chat-avatar/chat-avatar-2.webp',
        logStatus: 'follow'
    },
    {
        userName: 'mikepradofoto', 
        activityTime: '13m ago',
        favoritePhoto: '/assets/post-image/post-img-4.png',
        logStatus: 'like'
    },
    {
        userName: 'mikepradofoto', 
        activityTime: '13m ago',
        favoritePhoto: '/assets/post-image/post-img-5.png',
        logStatus: 'like'
    },
    {
        userName: 'mikepradofoto', 
        activityTime: '13m ago',
        favoritePhoto: '/assets/post-image/post-img-6.jpg',
        logStatus: 'like'
    },
    {
        userName: 'mikepradofoto', 
        activityTime: '13m ago',
        favoritePhoto: '/assets/post-image/post-img-7.png',
        logStatus: 'like'
    },
]

export const NotificationsPageTabsContainer: FC = () => {
    return (
        <Tabs>
            <TabsControll>
                <TabsControllBtn
                    flex={'1 1 50%'}
                    btnText='Activity Log'
                />
                <TabsControllBtn
                    flex={'1 1 50%'}
                    btnText='Income'
                />
            </TabsControll>

            <TabsBody>
                <TabsItem>
                    <Activity>
                        <ActivityBody>
                            <ActivityList data={activityPost}/>
                        </ActivityBody>
                    </Activity>
                </TabsItem>
            </TabsBody>
        </Tabs>
    );
};
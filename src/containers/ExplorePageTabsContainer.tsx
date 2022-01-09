import React, { FC } from 'react';

import { Tabs } from '../components/common/tabs/Tabs';
import { TabsBody } from '../components/common/tabs/TabsBody';
import { TabsControll } from '../components/common/tabs/TabsControll';
import { TabsControllBtn } from '../components/common/tabs/TabsControllBtn';
import { UserPostsList } from '../components/common/userPostsList/UserPostsList';

const userPosts = [
    { postImage: '/assets/post-image/post-img-3.webp', postTotalLikes: '124', postTotalComments: '15'},
    { postImage: '/assets/post-image/post-img-4.png', postTotalLikes: '124', postTotalComments: '15'},
    { postImage: '/assets/post-image/post-img-5.png', postTotalLikes: '435', postTotalComments: '55'},
    { postImage: '/assets/post-image/post-img-6.jpg', postTotalLikes: '23', postTotalComments: '56'},
    { postImage: '/assets/post-image/post-img-7.png', postTotalLikes: '356', postTotalComments: '65646'},
    { postImage: '/assets/post-image/post-img-8.png', postTotalLikes: '434', postTotalComments: '555'},
    { postImage: '/assets/post-image/post-img-9.png', postTotalLikes: '3', postTotalComments: '44'},
    { postImage: '/assets/post-image/post-img-10.png', postTotalLikes: '1254', postTotalComments: '5'},
    { postImage: '/assets/post-image/post-img-11.png', postTotalLikes: '454', postTotalComments: '16665'},
]

export const ExplorePageTabsContainer: FC = () => {
    return (
        <Tabs>
            <TabsControll>
                <TabsControllBtn
                    btnText='Most recent'
                />
                <TabsControllBtn
                    btnText='Most liked'
                />
                <TabsControllBtn
                    btnText='Discovered'
                />
            </TabsControll>

            <TabsBody>
                <UserPostsList data={userPosts}/>
            </TabsBody>
        </Tabs>
    );
};
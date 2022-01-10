import React, { FC } from 'react';
import { Avatar } from '../components/common/avatar/Avatar';

import { Tabs } from '../components/common/tabs/Tabs';
import { TabsBody } from '../components/common/tabs/TabsBody';
import { TabsControll } from '../components/common/tabs/TabsControll';
import { TabsControllBtn } from '../components/common/tabs/TabsControllBtn';
import { TabsItem } from '../components/common/tabs/TabsItem';
import { Activity } from '../components/mainPages/notificationsPage/activity/Activity';
import { ActivityBody } from '../components/mainPages/notificationsPage/activity/ActivityBody';
import { ActivityList } from '../components/mainPages/notificationsPage/activity/ActivityList';
import { Earned } from '../components/mainPages/notificationsPage/earned/Earned';
import { EarnedBody } from '../components/mainPages/notificationsPage/earned/EarnedBody';
import { EarnedColumn } from '../components/mainPages/notificationsPage/earned/EarnedColumn';
import { Income } from '../components/mainPages/notificationsPage/income/Income';
import { IncomeBody } from '../components/mainPages/notificationsPage/income/IncomeBody';
import { IncomeContent } from '../components/mainPages/notificationsPage/income/IncomeContent';
import { IncomeHeader } from '../components/mainPages/notificationsPage/income/IncomeHeader';
import { Table } from '../components/mainPages/notificationsPage/table/Table';
import { TableBody } from '../components/mainPages/notificationsPage/table/TableBody';
import { TableContent } from '../components/mainPages/notificationsPage/table/TableContent';
import { TableHeader } from '../components/mainPages/notificationsPage/table/tableHeader/TableHeader';
import { TableHeaderBody } from '../components/mainPages/notificationsPage/table/tableHeader/TableHeaderBody';
import { TableHeaderColumn } from '../components/mainPages/notificationsPage/table/tableHeader/TableHeaderColumn';
import { TableHeaderItem } from '../components/mainPages/notificationsPage/table/tableHeaderItem/TableHeaderItem';
import { TableHeaderItemBody } from '../components/mainPages/notificationsPage/table/tableHeaderItem/TableHeaderItemBody';
import { TableHeaderItemIcon } from '../components/mainPages/notificationsPage/table/tableHeaderItem/TableHeaderItemIcon';
import { TableHeaderItemText } from '../components/mainPages/notificationsPage/table/tableHeaderItem/TableHeaderItemText';
import { TotalItem } from '../components/mainPages/notificationsPage/totalItem/TotalItem';
import { StyledCaptionText, StyledTitleText } from '../components/typography/Typography1';

export type ActivityPostItem = {
    userName: string
    activityTime: string
    userAvatar?: string
    favoritePhoto?: string
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

const statisticsItems = {
    totalStatisctics: {
        totalEarned: '$5.00',
        totalReferrals: '$5.00',
        totalFollowers: '243'
    }
}

export const NotificationsPageTabsContainer: FC = () => {

    const { totalEarned, totalReferrals, totalFollowers } = statisticsItems.totalStatisctics

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
                {/* <TabsItem>
                    <Activity>
                        <ActivityBody>
                            <ActivityList data={activityPost}/>
                        </ActivityBody>
                    </Activity>
                </TabsItem> */}

                <TabsItem>
                    <Income>
                        <IncomeBody>
                            <StyledTitleText as={'h2'}>
                                Total earned
                            </StyledTitleText>

                            <IncomeHeader>
                                <Earned>
                                    <EarnedBody>
                                        <EarnedColumn>
                                            <TotalItem
                                                totalData={totalEarned}
                                                totalPretitle={'Total earned (USD)'}
                                                iconPath={'/assets/icons/icon-total-1.svg'}
                                            />
                                        </EarnedColumn>
                                        <EarnedColumn>
                                            <TotalItem
                                                totalData={totalReferrals}
                                                totalPretitle={'Referrals'}
                                                color='green'
                                                iconPath={'/assets/icons/icon-total-2.svg'}
                                            />
                                        </EarnedColumn>
                                        <EarnedColumn>
                                            <TotalItem
                                                totalData={totalFollowers}
                                                totalPretitle={'Followers'}
                                                color='orange'
                                                iconPath={'/assets/icons/icon-total-3.svg'}
                                            />
                                        </EarnedColumn>
                                    </EarnedBody>
                                </Earned>
                            </IncomeHeader>

                            <IncomeContent>
                                <Table>
                                    <TableBody>
                                        <TableHeader>
                                            <TableHeaderBody>
                                                <TableHeaderColumn>
                                                    <TableHeaderItem>
                                                        <TableHeaderItemBody>
                                                            <TableHeaderItemIcon>
                                                                <Avatar
                                                                    imgSize={'1.4rem'}
                                                                    imagePath={'/assets/icons/category-icon-1.svg'}
                                                                    brdrRadius={'0'}
                                                                />
                                                            </TableHeaderItemIcon>

                                                            <TableHeaderItemText>
                                                                <StyledCaptionText
                                                                    fontSize={'1.6rem'}
                                                                >
                                                                    Post
                                                                </StyledCaptionText>
                                                            </TableHeaderItemText>
                                                        </TableHeaderItemBody>
                                                    </TableHeaderItem>
                                                </TableHeaderColumn>
                                                <TableHeaderColumn>
                                                    <TableHeaderItem>
                                                        <TableHeaderItemBody>
                                                            <TableHeaderItemIcon>
                                                                <Avatar
                                                                    imgSize={'1.4rem'}
                                                                    imagePath={'/assets/icons/category-icon-2.svg'}
                                                                    brdrRadius={'0'}
                                                                />
                                                            </TableHeaderItemIcon>

                                                            <TableHeaderItemText>
                                                                <StyledCaptionText
                                                                    fontSize={'1.6rem'}
                                                                >
                                                                    Likes
                                                                </StyledCaptionText>
                                                            </TableHeaderItemText>
                                                        </TableHeaderItemBody>
                                                    </TableHeaderItem>
                                                </TableHeaderColumn>
                                                <TableHeaderColumn>
                                                    <TableHeaderItem>
                                                        <TableHeaderItemBody>
                                                            <TableHeaderItemIcon>
                                                                <Avatar
                                                                    imgSize={'1.4rem'}
                                                                    imagePath={'/assets/icons/category-icon-3.svg'}
                                                                    brdrRadius={'0'}
                                                                />
                                                            </TableHeaderItemIcon>

                                                            <TableHeaderItemText>
                                                                <StyledCaptionText
                                                                    fontSize={'1.6rem'}
                                                                >
                                                                    Comments
                                                                </StyledCaptionText>
                                                            </TableHeaderItemText>
                                                        </TableHeaderItemBody>
                                                    </TableHeaderItem>
                                                </TableHeaderColumn>
                                                <TableHeaderColumn>
                                                    <TableHeaderItem>
                                                        <TableHeaderItemBody>
                                                            <TableHeaderItemIcon>
                                                                <Avatar
                                                                    imgSize={'1.4rem'}
                                                                    imagePath={'/assets/icons/category-icon-4.svg'}
                                                                    brdrRadius={'0'}
                                                                />
                                                            </TableHeaderItemIcon>

                                                            <TableHeaderItemText>
                                                                <StyledCaptionText
                                                                    fontSize={'1.6rem'}
                                                                >
                                                                    Favourites
                                                                </StyledCaptionText>
                                                            </TableHeaderItemText>
                                                        </TableHeaderItemBody>
                                                    </TableHeaderItem>
                                                </TableHeaderColumn>
                                            </TableHeaderBody>
                                        </TableHeader>

                                        <TableContent>

                                        </TableContent>
                                    </TableBody>
                                </Table>
                            </IncomeContent>
                        </IncomeBody>
                    </Income>
                </TabsItem>
            </TabsBody>
        </Tabs>
    );
};
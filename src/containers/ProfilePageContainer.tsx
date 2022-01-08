import React, { FC } from 'react';
import { Avatar } from '../components/common/avatar/Avatar';
import { BgImage } from '../components/common/bgImage/BgImage';
import { ContainerHelper } from '../components/common/containerHelper/ContainerHelper';
import { UserInfo } from '../components/mainPages/profilePage/userInfo/UserInfo';
import { UserInfoAvatar } from '../components/mainPages/profilePage/userInfo/UserInfoAvatar';
import { UserInfoBody } from '../components/mainPages/profilePage/userInfo/UserInfoBody';

import { ProfilePage } from '../pages/profilePage/ProfilePage';
import { ProfilePageContent } from '../pages/profilePage/ProfilePageContent';
import { ProfilePageHeader } from '../pages/profilePage/ProfilePageHeader';
import { ProfilePageUserInfo } from '../pages/profilePage/ProfilePageUserInfo';
import { ProfilePageUserPosts } from '../pages/profilePage/ProfilePageUserPosts';
import { baseTheme } from '../styles/theme';

export const ProfilePageContainer: FC = () => {
    return (
        <ProfilePage>
            <ProfilePageHeader>
                <BgImage imgPath={'/assets/left_bg.png'}/>
            </ProfilePageHeader>

            <ProfilePageContent>
                <ProfilePageUserInfo>
                    <UserInfo>
                        <ContainerHelper>
                            <UserInfoBody>
                                <UserInfoAvatar>
                                    <Avatar
                                        imgSize={'17rem'}
                                        imagePath={'/assets/profile.png'}
                                        imageAlt={'user avatar'}
                                        border={`.7rem solid ${baseTheme.colors.white}`}
                                    />
                                </UserInfoAvatar>
                                
                            </UserInfoBody>
                        </ContainerHelper>
                    </UserInfo>
                </ProfilePageUserInfo>

                <ProfilePageUserPosts>

                </ProfilePageUserPosts>
            </ProfilePageContent>
        </ProfilePage>
    );
};
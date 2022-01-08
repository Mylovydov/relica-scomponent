import React, { FC } from 'react';
import { Avatar } from '../components/common/avatar/Avatar';
import { Image } from '../components/common/Image/Image';
import { ContainerHelper } from '../components/common/containerHelper/ContainerHelper';
import { UserInfo } from '../components/mainPages/profilePage/userInfo/UserInfo';
import { UserInfoAvatar } from '../components/mainPages/profilePage/userInfo/UserInfoAvatar';
import { UserInfoBody } from '../components/mainPages/profilePage/userInfo/UserInfoBody';
import { UserInfoProfileInformation } from '../components/mainPages/profilePage/userInfo/UserInfoProfileInformation';
import { UserInfoStatistics } from '../components/mainPages/profilePage/userInfo/UserInfoStatistics';

import { ProfilePage } from '../pages/profilePage/ProfilePage';
import { ProfilePageContent } from '../pages/profilePage/ProfilePageContent';
import { ProfilePageHeader } from '../pages/profilePage/ProfilePageHeader';
import { ProfilePageUserInfo } from '../pages/profilePage/ProfilePageUserInfo';
import { ProfilePageUserPosts } from '../pages/profilePage/ProfilePageUserPosts';
import { baseTheme } from '../styles/theme';
import { StyledCaptionText, StyledSubtitleText, StyledTitleText } from '../components/typography/Typography1';
import { Statistics } from '../components/mainPages/profilePage/statistics/Statistics';
import { StatisticsList } from '../components/mainPages/profilePage/statistics/StatisticsList';
import { StatisticsListItem } from '../components/mainPages/profilePage/statistics/StatisticsListItem';
import { Posts } from '../components/mainPages/profilePage/posts/Posts';
import { PostsContainer } from '../components/mainPages/profilePage/posts/PostsContainer';
import { UserPostsList } from '../components/mainPages/profilePage/posts/UserPostsList'; 

export type userPost = {postImage: string, postTotalLikes: string, postTotalComments: string}

const profileData = {
    bgImage: '/assets/left_bg.png',
    userAvatar: '/assets/profile.png',
    userName: 'Mikaela White',
    userDescr: 'Designer, living in Melbourne, Australia',
    totalPosts: '32',
    totalFollowers: '124',
    totalFollowing: '545',
    userPosts: [
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
}


export const ProfilePageContainer: FC = () => {

    const {
        bgImage, 
        userAvatar, 
        userName, 
        userDescr,
        totalPosts,
        totalFollowers,
        totalFollowing,
        userPosts
    } = profileData

    return (
        <ProfilePage>
            <ProfilePageHeader>
                <Image imgPath={bgImage}/>
            </ProfilePageHeader>

            <ProfilePageContent>
                <ProfilePageUserInfo>
                    <UserInfo>
                        <ContainerHelper>
                            <UserInfoBody>

                                <UserInfoAvatar>
                                    <Avatar
                                        imgSize={'17rem'}
                                        imagePath={userAvatar}
                                        imageAlt={'user avatar'}
                                        border={`.7rem solid ${baseTheme.colors.white}`}
                                    />
                                </UserInfoAvatar>

                                <UserInfoProfileInformation>

                                    <StyledTitleText
                                        as='h1'
                                        fontSize={'3.5rem'}
                                        md2FontSize={'3.5rem'}
                                        md3FontSize={'3.5rem'}
                                        md4FontSize={'3.5rem'}
                                        weight={'500'}
                                    >
                                        {userName}
                                    </StyledTitleText>

                                    <StyledCaptionText
                                        as='p'
                                        fontSize={'1.6rem'}
                                        md2FontSize={'1.6rem'}
                                        md3FontSize={'1.6rem'}
                                        md4FontSize={'1.6rem'}
                                    >
                                        {userDescr}
                                    </StyledCaptionText>

                                    <StyledSubtitleText
                                        as='span'
                                        color={baseTheme.colors.primary}
                                        weight='500'
                                    >
                                        Edit profile
                                    </StyledSubtitleText>

                                </UserInfoProfileInformation>

                                <UserInfoStatistics>

                                    <Statistics>
                                        <StatisticsList>
                                            <StatisticsListItem>
                                                <StyledTitleText
                                                    as='div'
                                                    fontSize='2rem'
                                                    md2FontSize={'2rem'}
                                                    md3FontSize={'2rem'}
                                                    md4FontSize={'2rem'}
                                                    
                                                >
                                                    {totalPosts}
                                                </StyledTitleText>
                                                <StyledCaptionText
                                                    fontSize='1.6rem'
                                                >
                                                    Posts
                                                </StyledCaptionText>
                                            </StatisticsListItem>
                                            <StatisticsListItem>
                                                <StyledTitleText
                                                    as='div'
                                                    fontSize='2rem'
                                                    md2FontSize={'2rem'}
                                                    md3FontSize={'2rem'}
                                                    md4FontSize={'2rem'}
                                                >
                                                    {totalFollowers}
                                                </StyledTitleText>
                                                <StyledCaptionText
                                                    fontSize='1.6rem'
                                                >
                                                    Followers
                                                </StyledCaptionText>
                                            </StatisticsListItem>
                                            <StatisticsListItem>
                                                <StyledTitleText
                                                    as='div'
                                                    fontSize='2rem'
                                                    md2FontSize={'2rem'}
                                                    md3FontSize={'2rem'}
                                                    md4FontSize={'2rem'}
                                                >
                                                    {totalFollowing}
                                                </StyledTitleText>
                                                <StyledCaptionText
                                                    fontSize='1.6rem'
                                                >
                                                    Following
                                                </StyledCaptionText>
                                            </StatisticsListItem>
                                        </StatisticsList>
                                    </Statistics>

                                </UserInfoStatistics>

                            </UserInfoBody>
                        </ContainerHelper>
                    </UserInfo>
                </ProfilePageUserInfo>

                <ProfilePageUserPosts>
                    <Posts>
                        <PostsContainer>
                            <UserPostsList data={userPosts}/>
                        </PostsContainer>
                    </Posts>
                </ProfilePageUserPosts>
            </ProfilePageContent>
        </ProfilePage>
    );
};
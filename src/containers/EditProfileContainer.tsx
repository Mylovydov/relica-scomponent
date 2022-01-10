import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import { Avatar } from '../components/common/avatar/Avatar';
import { Container } from '../components/common/container/Container';
import { ImageItem } from '../components/common/imageItem/ImageItem';
import { EditProfile } from '../components/mainPages/editProfilePage/editProfile/EditProfile';
import { EditProfileAvatar } from '../components/mainPages/editProfilePage/editProfile/EditProfileAvatar';
import { EditProfileAvatarWrapper } from '../components/mainPages/editProfilePage/editProfile/EditProfileAvatarWrapper';
import { EditProfileBody } from '../components/mainPages/editProfilePage/editProfile/EditProfileBody';
import { EditProfileChangeIcon } from '../components/mainPages/editProfilePage/editProfile/EditProfileChangeIcon';
import { EditProfileContent } from '../components/mainPages/editProfilePage/editProfile/EditProfileContent';
import { EditProfileFooter } from '../components/mainPages/editProfilePage/editProfile/EditProfileFooter';
import { EditProfileHeader } from '../components/mainPages/editProfilePage/editProfile/EditProfileHeader';
import { Navigation } from '../components/mainPages/editProfilePage/navigation/Navigation';
import { NavigationBody } from '../components/mainPages/editProfilePage/navigation/NavigationBody';
import { NavigationList } from '../components/mainPages/editProfilePage/navigation/NavigationList';
import { NavigationListItem } from '../components/mainPages/editProfilePage/navigation/NavigationListItem';
import { StyledSubtitleText, StyledTitleText } from '../components/typography/Typography1';
import { EditProfilePage } from '../pages/chatPage/editProfilePage/EditProfilePage';
import { EditProfilePageBody } from '../pages/chatPage/editProfilePage/EditProfilePageBody';
import { EditProfilePageContent } from '../pages/chatPage/editProfilePage/EditProfilePageContent';
import { EditProfilePageNavigation } from '../pages/chatPage/editProfilePage/EditProfilePageNavigation';
import { baseTheme } from '../styles/theme';
import { EditProfileFormContainer } from './EditProfileFormContainer';


export const EditProfilePageContainer: FC = () => {
   return (
      <EditProfilePage>
         <Container>
            <EditProfilePageBody>
               <EditProfilePageNavigation>
                  <Navigation>
                        <NavigationBody>
                           <NavigationList>
                              <NavigationListItem>
                                 <Link to={'#'}>
                                    <StyledSubtitleText
                                       fontSize={'2rem'}
                                       md2FontSize={'2rem'}
                                       md3FontSize={'2rem'}
                                       md4FontSize={'2rem'}
                                    >
                                       Edit profile
                                    </StyledSubtitleText>
                                 </Link>
                              </NavigationListItem>
                              <NavigationListItem>
                                 <Link to={'#'}>
                                    <StyledSubtitleText
                                       fontSize={'2rem'}
                                       md2FontSize={'2rem'}
                                       md3FontSize={'2rem'}
                                       md4FontSize={'2rem'}
                                    >
                                       Push notifications
                                    </StyledSubtitleText>
                                 </Link>
                              </NavigationListItem>
                              <NavigationListItem>
                                 <Link to={'#'}>
                                    <StyledSubtitleText
                                       fontSize={'2rem'}
                                       md2FontSize={'2rem'}
                                       md3FontSize={'2rem'}
                                       md4FontSize={'2rem'}
                                    >
                                       Language
                                    </StyledSubtitleText>
                                 </Link>
                              </NavigationListItem>
                              <NavigationListItem>
                                 <Link to={'#'}>
                                    <StyledSubtitleText
                                       fontSize={'2rem'}
                                       md2FontSize={'2rem'}
                                       md3FontSize={'2rem'}
                                       md4FontSize={'2rem'}
                                    >
                                       Security
                                    </StyledSubtitleText>
                                 </Link>
                              </NavigationListItem>
                              <NavigationListItem>
                                 <Link to={'#'}>
                                    <StyledSubtitleText
                                       fontSize={'2rem'}
                                       md2FontSize={'2rem'}
                                       md3FontSize={'2rem'}
                                       md4FontSize={'2rem'}
                                    >
                                       Contact
                                    </StyledSubtitleText>
                                 </Link>
                              </NavigationListItem>
                              <NavigationListItem>
                                 <Link to={'#'}>
                                    <StyledSubtitleText
                                       fontSize={'2rem'}
                                       md2FontSize={'2rem'}
                                       md3FontSize={'2rem'}
                                       md4FontSize={'2rem'}
                                    >
                                       About us
                                    </StyledSubtitleText>
                                 </Link>
                              </NavigationListItem>
                              <NavigationListItem>
                                 <Link to={'#'}>
                                    <StyledSubtitleText
                                       fontSize='2rem'
                                       md2FontSize={'2rem'}
                                       md3FontSize={'2rem'}
                                       md4FontSize={'2rem'}
                                       color={baseTheme.colors.primary}
                                       weight='500'
                                       textDecor={'underline'}
                                    >
                                       Edit profile
                                    </StyledSubtitleText>
                                 </Link>
                              </NavigationListItem>
                           </NavigationList>
                        </NavigationBody>
                  </Navigation>
               </EditProfilePageNavigation>

               <EditProfilePageContent>
                  <EditProfile>
                     <EditProfileBody>

                        <EditProfileHeader>
                           <StyledTitleText>
                              Edit profile
                           </StyledTitleText>
                        </EditProfileHeader>

                        <EditProfileContent>
                           <ImageItem
                              imgPath={'/assets/post-image/post-img-4.png'}
                              paddingBot={'24.85%'}
                           />
                           <EditProfileChangeIcon
                              top={'1.6rem'}
                              right={'1.6rem'}
                           >
                              <Avatar
                                 imgSize={'4rem'}
                                 imagePath={'/assets/icons/changeBgPhoto.svg'}
                              />
                           </EditProfileChangeIcon>
                        </EditProfileContent>

                        <EditProfileAvatar>
                           <EditProfileAvatarWrapper>
                              <Avatar
                                 imgSize={'11.5rem'}
                                 imagePath={'/assets/chat-avatar/chat-avatar-1.webp'}
                              />
                              <EditProfileChangeIcon
                                 bottom={'-1rem'}
                                 right={'-0.4rem'}
                              >
                                 <Avatar
                                    imgSize={'4rem'}
                                    imagePath={'/assets/icons/changephoto.svg'}
                                 />
                              </EditProfileChangeIcon>
                           </EditProfileAvatarWrapper>

                           <StyledTitleText
                              fontSize='3.5rem'
                              weight='500'
                           >
                              Mikaela White
                           </StyledTitleText>
                        </EditProfileAvatar>

                        <EditProfileFooter>
                           <EditProfileFormContainer />
                        </EditProfileFooter>

                     </EditProfileBody>
                  </EditProfile>
               </EditProfilePageContent>
            </EditProfilePageBody>
         </Container>
      </EditProfilePage>
   );
};
import React, { FC } from 'react';

import { baseTheme } from '../styles/theme';

import { Header } from '../components/mainPages/header/Header';
import { Container } from '../components/common/container/Container';
import { HeaderContainer } from '../components/mainPages/header/HeaderContainer';
import { HeaderBody } from '../components/mainPages/header/HeaderBody';
import { HeaderLogo } from '../components/mainPages/header/HeaderLogo';
import { HeaderSearch } from '../components/mainPages/header/HeaderSearch';
import { HeaderActions } from '../components/mainPages/header/HeaderActions';
import { Logo } from '../components/common/logo/Logo'
import { SearchForm } from '../components/common/form/searchForm/SearchForm';
import { ActionsHeader } from '../components/mainPages/header/actionsHeader/ActionsHeader';
import { ActionsHeaderButton } from '../components/mainPages/header/actionsHeader/ActionsHeaderButton';
import { Btn, BtnVariants } from '../components/common/btn/Btn';
import { ActionsHeaderIcons } from '../components/mainPages/header/actionsHeader/ActionsHeaderIcons';
import { IconsList } from '../components/mainPages/header/iconsList/IconsList';
import { IconsItem } from '../components/mainPages/header/iconsList/IconsItem';
import { ActionsHeaderProfile } from '../components/mainPages/header/actionsHeader/ActionsHeaderProfile';
import { ProfileHeader } from '../components/mainPages/header/profileHeader/ProfileHeader';
import { Avatar } from '../components/common/avatar/Avatar';
import { Submenu } from '../components/mainPages/header/submenu/Submenu';
import { SubmenuList } from '../components/mainPages/header/submenu/SubmenuList';
import { ProfileHeaderSubmenu } from '../components/mainPages/header/profileHeader/ProfileHeaderSubmenu';
import { SubmenuItem } from '../components/mainPages/header/submenu/SubmenuItem';


export const HeaderMainContainer: FC = () => {
   return (
      <Header>
         <Container>
            <HeaderBody>
               <HeaderLogo>
                  <Logo
                     imgPath={"/assets/logo.png"}
                     textFontSize={'2.8rem'}
                     textColor={baseTheme.colors.black}
                     logoImgageFlex={'0 0 5rem'}
                     logoImgMd2Flex={'0 0 5rem'}
                     logoImgMd4Flex={'0 0 4.5rem'}
                     logoImgageMargin={'0 1rem 0 0'}
                  />
               </HeaderLogo>

               <HeaderSearch>
                  <SearchForm
                     searchInputName={'"headerSearchForm"'}
                     placeholder={'Search for users'}
                  />
               </HeaderSearch>

               <HeaderActions>
                  <ActionsHeader>
                     <ActionsHeaderButton>
                        <Btn
                           children={'Make a post'}
                           btnVariant={BtnVariants.blue}
                           height={'2.8em'}
                        />
                     </ActionsHeaderButton>
                     <ActionsHeaderIcons>
                        <IconsList>
                           <IconsItem
                              to={'#'}
                              imgPath={"/assets/icons/zoom.svg"}
                           />
                           <IconsItem
                              to={'#'}
                              imgPath={"/assets/icons/alarm.svg"}
                              notification
                           />
                           <IconsItem
                              to={'#'}
                              imgPath={"/assets/icons/bubble-speak.svg"}
                              notification
                           />
                        </IconsList>
                     </ActionsHeaderIcons>
                     <ActionsHeaderProfile>
                        <ProfileHeader>
                           <Avatar
                              imagePath={"/assets/profile.png"}
                              imageAlt={"profile avatar"}
                              width={'3.7rem'}
                              heigth={'3.7rem'}
                           />
                           <ProfileHeaderSubmenu>
                              <Submenu>
                                 <SubmenuList>
                                    <SubmenuItem to={'profile'} children={'Profile'}/>
                                    <SubmenuItem to={'#'} children={'Settings'}/>
                                    <SubmenuItem to={'#'} children={'Log out'}/>
                                 </SubmenuList>
                              </Submenu>
                           </ProfileHeaderSubmenu>

                        </ProfileHeader>
                     </ActionsHeaderProfile>
                  </ActionsHeader>
               </HeaderActions>

            </HeaderBody>
         </Container>
      </Header>
   );
};
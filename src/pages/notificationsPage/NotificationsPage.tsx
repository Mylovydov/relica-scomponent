import React, { FC } from 'react';

import { ContainerHelper100 } from '../../components/common/containerHelper/ContainerHelper100';
import { StyledTitleText } from '../../components/typography/Typography1';
import { NotificationsPageTabsContainer } from '../../containers/NotificationsPageTabsContainer';
import { NotificationsPageBody } from './NotificationsPageBody';
import { NotificationsPageTabs } from './NotificationsPageTabs';

// StyledProps

// Styled

// ComponentProps

export const NotificationsPage: FC = () => {
    return (
        <div>
            <ContainerHelper100>
                <NotificationsPageBody>
                    
                    <StyledTitleText>
                        Notifications
                    </StyledTitleText>

                    <NotificationsPageTabs>
                        <NotificationsPageTabsContainer/>
                    </NotificationsPageTabs>
                </NotificationsPageBody>
            </ContainerHelper100>
        </div>
    );
};
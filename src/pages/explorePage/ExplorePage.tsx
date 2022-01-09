import React, { FC } from 'react';

import { ContainerHelper100 } from '../../components/common/containerHelper/ContainerHelper100';
import { StyledTitleText } from '../../components/typography/Typography1';
import { ExplorePageTabsContainer } from '../../containers/ExplorePageTabsContainer';
import { ExplorePageBody } from './ExplorePageBody';
import { ExplorePageTabs } from './ExplorePageTabs';

// StyledProps

// Styled

// ComponentProps

export const ExplorePage: FC = () => {
    return (
        <div>
            <ContainerHelper100>
                <ExplorePageBody>
                    <StyledTitleText>
                        Explore
                    </StyledTitleText>

                    <ExplorePageTabs>
                        <ExplorePageTabsContainer />
                    </ExplorePageTabs>
                </ExplorePageBody>
            </ContainerHelper100>
        </div>
    );
};
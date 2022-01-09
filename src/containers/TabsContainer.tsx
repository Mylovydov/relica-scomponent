import React, { FC } from 'react';

import { Tabs } from '../components/common/tabs/Tabs';
import { TabsBody } from '../components/common/tabs/TabsBody';
import { TabsControll } from '../components/common/tabs/TabsControll';
import { TabsControllBtn } from '../components/common/tabs/TabsControllBtn';

export const TabsContainer: FC = () => {
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
                
            </TabsBody>
        </Tabs>
    );
};
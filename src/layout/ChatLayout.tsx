import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Wrapper } from '../components/authPages/wrapper/Wrapper';
import { Content } from '../components/mainPages/Content';
import { Popup } from '../components/mainPages/popup/Popup';
import { HeaderMainContainer } from '../containers/HeaderMainContainer'; 

export const ChatLayout: FC = () => {
    return (
        <>
            <Wrapper>
                <HeaderMainContainer/>
                <Content>
                    <Outlet/>
                </Content>
            </Wrapper>
            {/* <Popup/> */}
        </>

        
    )
}
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledExplorePageTabs = styled.div`
    margin: 1.5rem 0 0 0;
`

export const ExplorePageTabs: FC = (props) => {
    return <StyledExplorePageTabs {...props} />
};
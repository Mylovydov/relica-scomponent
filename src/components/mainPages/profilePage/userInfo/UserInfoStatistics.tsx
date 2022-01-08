import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledUserInfoStatistics = styled.div`
    margin: 2.5rem 0 0 0;
`

// ComponentProps


export const UserInfoStatistics: FC = (props) => {
    return <StyledUserInfoStatistics {...props}/>
};
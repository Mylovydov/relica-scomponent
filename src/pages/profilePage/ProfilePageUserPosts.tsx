import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledProfilePageUserPosts = styled.div`
    margin: 4rem 0 0 0;
`
// ComponentProps

export const ProfilePageUserPosts: FC = (props) => {
    return <StyledProfilePageUserPosts {...props} />
};

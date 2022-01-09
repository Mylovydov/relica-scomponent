import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledActivityBody = styled.div`
    padding: 1.6rem 0;
`
// ComponentProps


export const ActivityBody: FC = (props) => {
    return <StyledActivityBody {...props} />
};
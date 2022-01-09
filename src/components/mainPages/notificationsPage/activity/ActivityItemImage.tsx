import React, { FC } from 'react';
import styled from 'styled-components';
// StyledProps

// Styled
const StyledActivityItemImage = styled.div`
    flex: 0 0 5.6rem;
`
// ComponentProps


export const ActivityItemImage: FC = (props) => {
    return <StyledActivityItemImage {...props} />
}
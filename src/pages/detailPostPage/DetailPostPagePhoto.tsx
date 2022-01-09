import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledDetailPostPagePhoto = styled.div`
    flex: 0 0 50%;
    padding: 2.5rem 2.5rem 2.5rem 0;
`
// ComponentProps

export const DetailPostPagePhoto: FC = (props) => {
    return <StyledDetailPostPagePhoto {...props}/>
};

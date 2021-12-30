import React, { FC } from 'react';
import styled from 'styled-components';


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
`

export const Wrapper: FC = (props) => {
    return <StyledWrapper {...props} />
};
import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledContainerHelper = styled.div`
   max-width: 103rem;
   margin: 0 auto;
   width: 100%;
   padding: 0 1.5rem;
`
/* ComponentProps */

export const ContainerHelper100: FC = (props) => {
    return <StyledContainerHelper {...props}/>
};
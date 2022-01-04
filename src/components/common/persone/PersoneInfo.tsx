import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
// Styled
const StyledPersoneInfo = styled.div`
   flex: 1 1 auto;
`
// ComponentProps

export const PersoneInfo: FC = (props) => {
   return <StyledPersoneInfo {...props}/>
};
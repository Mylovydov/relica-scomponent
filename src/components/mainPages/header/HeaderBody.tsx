import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
// Styled
const StyledHeaderBody = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
   justify-content: space-between;
`
// ComponentProps

export const HeaderBody: FC = (props) => {
   return <StyledHeaderBody {...props}/>
};
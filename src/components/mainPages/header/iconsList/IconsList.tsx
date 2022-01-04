import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
// Styled
const StyledIconsList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
`
// ComponentProps

export const IconsList: FC = (props) => {
   return <StyledIconsList {...props}/>
};
import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
// Styled
const StyledSearchFormBtn = styled.button`
   position: absolute;
   top: 50%;
   left: 1.5rem;
   z-index: 1;
   width: 2rem;
   height: 2rem;

   transform: translateY(-50%);

   background: url("/assets/icons/zoom.svg") no-repeat;
   background-size: 2rem 2rem;
`
// ComponentProps

export const SearchFormBtn: FC = () => {
   return <StyledSearchFormBtn/>
};
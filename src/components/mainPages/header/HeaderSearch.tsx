import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledHeaderSearchProps {
   padding?: string,
   margin?: string
}

// Styled
const StyledHeaderSearch = styled.div<StyledHeaderSearchProps>`
   flex: 1 1 auto;
   padding: ${({ padding }) => padding || '0 0 0 6.5rem'};
   margin: ${({ margin }) => margin || '0 0.5rem 0 0'};
`
// ComponentProps
interface HeaderSearchProps {
   padding?: string,
   margin?: string
}

export const HeaderSearch: FC<HeaderSearchProps> = (props) => {
   return <StyledHeaderSearch {...props}/>
};
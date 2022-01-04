import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledSearchFormIconProps {
   display?: string
}
// Styled
const StyledSearchFormIcon = styled.button<StyledSearchFormIconProps>`
   display: ${({display}) => display || 'none'};
`
// ComponentProps
interface SearchFormIconProps {
   display?: string
}

export const SearchFormIcon: FC<SearchFormIconProps> = (props) => {
   return <StyledSearchFormIcon type='button' {...props}/>
};
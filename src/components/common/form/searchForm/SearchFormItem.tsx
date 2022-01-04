import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledSearchFormItemProps {
   maxWidth?: string
}

// Styled
const StyledSearchFormItem = styled.form<StyledSearchFormItemProps>`
   display: flex;
   align-items: center;
   max-width: ${props => props.maxWidth || '50rem'};
`

// ComponentProps
interface SearchFormItemProps {
   maxWidth?: string
}

export const SearchFormItem: FC<SearchFormItemProps> = (props) => {
   return <StyledSearchFormItem {...props}/>
};
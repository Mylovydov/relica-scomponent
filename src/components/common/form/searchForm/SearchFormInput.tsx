import React, {FC, useState } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledSearchFormInputProps {
   color?: string,
   height?: string,
   fSize?: string,
   placeholderFz?: string,
   placeholderColor?: string
}

// Styled
const StyledSearchFormInput = styled.input<StyledSearchFormInputProps>`
   font-size: ${props => props.fSize || '1.6rem'};
   color: ${({ theme, ...props }) => props.color || theme.colors.black};
   font-weight: 400;

   width: 100%;
   padding: 0 2rem 0 4.5rem;
   height: ${props => props.height || '4.5rem'};
   margin: 0;

   border: .1rem solid #D6D6D6;
   border-radius: .5rem;
   background-color: ${({ theme }) => theme.colors.white};

   outline: none;

   &::placeholder {
      font-size: ${props => props.placeholderFz || '1.6rem'};
      color: ${props => props.placeholderColor || 'gray'};
      font-weight: 400;
   }
`

// ComponentProps
interface SearchFormInputProps {
   searchInputName: string,
   autoComplete?: string,
   color?: string,
   height?: string,
   fSize?: string,
   placeholder: string,
   placeholderFz?: string,
   placeholderColor?: string
}

export const SearchFormInput: FC<SearchFormInputProps> = (
   {
      searchInputName,
      placeholder,
      autoComplete = 'off',
      ...props
   }
   ) => {

      const [term, setTerm] = useState('')

      const onUpdateSearchFormInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
         console.log(event.currentTarget.value);
         
         const term = event.currentTarget.value
         setTerm(term)
         // onUpdateSearch(term)
      }

   return (
      <StyledSearchFormInput
         onChange={onUpdateSearchFormInput}

         {...props}
         type='text'
         name={searchInputName}
         autoComplete={autoComplete}
         placeholder={placeholder}
         value={term}
      />
   )
};
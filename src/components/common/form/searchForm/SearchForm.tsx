import React, { FC, useState,  } from 'react';

import styled from 'styled-components';

import { SearchFormIcon } from './SearchFormIcon';
import { SearchFormItem } from './SearchFormItem';
import { SearchFormBtn } from './SearchFormBtn';
import { SearchFormInput } from './SearchFormInput';


// StyledProps

// Styled
const StyledSearchForm = styled.div`
   width: 100%;
   position: relative;
`
// ComponentProps
interface SearchFormProps {
   action: () => void

   dispalyIcon?: string
   searchItemMaxW?: string
   searchInputName: string
   autoComplete?: string
   color?: string
   height?: string
   fSize?: string
   placeholder: string
   placeholderFz?: string
   placeholderColor?: string
}

export const SearchForm: FC<SearchFormProps> = (
   {
      action,

      dispalyIcon,
      searchItemMaxW,
      searchInputName,
      autoComplete,
      color,
      height,
      fSize,
      placeholder,
      placeholderFz,
      placeholderColor
   }
) => {

   return (
      <StyledSearchForm>
         <SearchFormIcon display={dispalyIcon}/>
         <SearchFormItem maxWidth={searchItemMaxW}>
            {/* <SearchFormBtn/> */}
            <SearchFormInput
               onUpdateSearch={action}
               searchInputName={searchInputName}
               autoComplete={autoComplete}
               color={color}
               height={height}
               fSize={fSize}
               placeholder={placeholder}
               placeholderFz={placeholderFz}
               placeholderColor={placeholderColor}
            />
         </SearchFormItem>
      </StyledSearchForm>
   );
};
import React, {FC} from "react";
import styled from "styled-components";

import { ClassTypographyVariants, TagTypographyVariants, Typography } from '../../../typography/Typography'
import { FormGroup } from '../FormGroup'
import { baseTheme } from "../../../../styles/theme";

// StyledProps

// Styled
const StyledInputItem = styled.input`
   font-family: inherit;
   font-size: 1.6rem;
   color: ${baseTheme.colors.black};
   font-weight: 400;
   line-height: 130%;

   display: block;
   width: 100%;
   height: 3rem;
   padding: 2rem 0;

   background: none;
   border: none;
   border-bottom: .1rem solid #C3C3C3;
   border-radius: 0;
   box-shadow: none;

   outline: none;
   position: relative;

   &::placeholder {
      color: ${baseTheme.colors.gray};
      font-weight: 400;
   }

   &+span {
      opacity: 0;

      position: absolute;
      top: -.7rem;
      left: 0;
      z-index: 1;

      transition: opacity .2s linear;
   }

   &:focus {
      &::placeholder {
         /* color: ${baseTheme.colors.black}; */
         font-weight: 400;
      }
   }

   &:focus+span {
      opacity: 1;
   }
`

// ComponentProps
interface InputProps {
   inputAutoComplete?: string,
   inputName: string,
   inputPlaceholder: string,
   inputLabel: string,
   inpuType?: string
}

export const InputItem: FC<InputProps> = (
   {
      inputAutoComplete = 'off',
      inputName,
      inputPlaceholder,
      inputLabel,
      inpuType = 'text'
   }
   ) => {
      return (
         <FormGroup>
            <StyledInputItem
               autoComplete={inputAutoComplete}
               type={inpuType}
               name={inputName}
               placeholder={inputPlaceholder}
            />
            <Typography
               variant={ClassTypographyVariants.caption4}
               component={TagTypographyVariants.span}
            >
               {inputLabel}
            </Typography>
         </FormGroup>
      )
   }
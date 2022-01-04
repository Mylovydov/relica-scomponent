import React, { FC } from 'react';

import styled from 'styled-components';

import { Avatar } from '../avatar/Avatar';
import { PersoneInfo } from './PersoneInfo';

// StyledProps
interface StyledPersoneProps {
   nameFontSize?: string,
   nameWeight?: string,
   nameColor?: string,
   subColor?: string,
   subFontSize?: string,
   subMargin?: string
}
// Styled
const StyledPersone = styled.div<StyledPersoneProps>`
   display: flex;
   align-items: center;

   span {
      font-size: ${props => props.nameFontSize || '2.8rem'};
      font-weight: ${({ theme, ...props }) => props.nameWeight || '700'};
      line-height: 130%;
      color: ${({ theme, ...props }) => props.nameColor || theme.colors.black};
   }

   p {
      margin: ${props => props.subMargin || '.2rem 0 0 0'};
      color: ${({ theme, ...props }) => props.subColor || theme.colors.gray};
      font-size: ${props => props.subFontSize || '1.6rem'};
   }
`
// ComponentProps
interface PersoneProps {
   imagePath: string,
   imageAlt?: string,
   innerMargin?: string,
   personeName: string,
   nameFontSize?: string,
   nameColor?: string,
   nameWeight?: string,
   personeSubtitle?: string,
   subFontSize?: string,
   subColor?: string,
   subMargin?: string
}

export const Persone: FC<PersoneProps> = (
   {
      imagePath,
      innerMargin,
      personeName,
      personeSubtitle,
      ...props
   }
   ) => {
   return (
      <StyledPersone {...props}
      >
         <Avatar
            imagePath={imagePath}
            imageAlt='post user avatar'
            margin={innerMargin}
         />

         <PersoneInfo>
            <span>{personeName}</span>
            {personeSubtitle && <p>{personeSubtitle}</p>}
            
         </PersoneInfo>
         
      </StyledPersone>
   );
};
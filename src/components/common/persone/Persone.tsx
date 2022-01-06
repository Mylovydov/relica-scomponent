import React, { FC } from 'react';

import styled from 'styled-components';

import { Avatar } from '../avatar/Avatar';
import { PersoneInfo } from './PersoneInfo';
import { StyledTitleText, StyledCaptionText } from '../../typography/Typography1'

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

   p {
      margin: ${props => props.subMargin || '.2rem 0 0 0'};
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
            <StyledTitleText
               as='span'
               fontSize={'2.8rem'}
               md2FontSize={'2.8rem'}
               md3FontSize={'2.8rem'}
               md4FontSize={'2.8rem'}
            >
               {personeName}
            </StyledTitleText>

            {personeSubtitle &&
               <StyledCaptionText
                  as='p'
                  fontSize={'1.6rem'}
                  md2FontSize={'1.6rem'}
                  md3FontSize={'1.6rem'}
                  md4FontSize={'1.6rem'}
               >
                  {personeSubtitle}
               </StyledCaptionText>}
            
         </PersoneInfo>
         
      </StyledPersone>
   );
};
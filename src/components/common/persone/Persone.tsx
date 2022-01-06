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

   // Avatar
   imagePath: string
   imageAlt?: string
   innerMargin?: string
   imgSize?: string

   // Title
   personeName: string
   nameFontSize?: string
   nameMd2FontSize?: string
   nameMd3FontSize?: string
   nameMd4FontSize?: string
   nameColor?: string
   nameWeight?: string

   // Subtitle
   personeSubtitleText?: string
   subFontSize?: string
   subMd2FontSize?: string
   subMd3FontSize?: string
   subMd4FontSize?: string
   subColor?: string
   subMargin?: string
}

export const Persone: FC<PersoneProps> = (
   {
      // Avatar
      imagePath,
      imageAlt ='post user avatar',
      innerMargin,
      imgSize,

      // Title
      personeName,
      nameFontSize = '2.8rem',
      nameMd2FontSize = '2.8rem',
      nameMd3FontSize = '2.8rem',
      nameMd4FontSize = '2.8rem',
      nameColor,
      nameWeight,

      // Subtitle
      personeSubtitleText,
      subFontSize = '1.6rem',
      subMd2FontSize = '1.6rem',
      subMd3FontSize = '1.6rem',
      subMd4FontSize = '1.6rem',
      subColor,
      subMargin
   }
   ) => {
   return (
      <StyledPersone subMargin={subMargin}
      >
         <Avatar
            imagePath={imagePath}
            imageAlt={imageAlt}
            margin={innerMargin}
            imgSize={imgSize}
         />

         <PersoneInfo>
            <StyledTitleText
               as='span'
               fontSize={nameFontSize}
               md2FontSize={nameMd2FontSize}
               md3FontSize={nameMd3FontSize}
               md4FontSize={nameMd4FontSize}
               color={nameColor}
               weight={nameWeight}
            >
               {personeName}
            </StyledTitleText>

            {personeSubtitleText &&
               <StyledCaptionText
                  as='p'
                  fontSize={subFontSize}
                  md2FontSize={subMd2FontSize}
                  md3FontSize={subMd3FontSize}
                  md4FontSize={subMd4FontSize}
                  color={subColor}
               >
                  {personeSubtitleText}
               </StyledCaptionText>}
            
         </PersoneInfo>
         
      </StyledPersone>
   );
};
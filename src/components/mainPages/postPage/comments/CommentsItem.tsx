import React, { FC } from 'react';

import styled from 'styled-components';
import { StyledTitleText, StyledBodyText } from '../../../typography/Typography1'

// StyledProps
interface StyledCommentsItemProps {
   margin?: string
   nameMargRigth?: string
}
// Styled
const StyledCommentsItem = styled.li<StyledCommentsItemProps>`
   display: flex;
   align-items: center;
   margin: ${({ margin = '0 0 2rem 0' }) => margin};

   span {
      align-self: flex-start;
      margin-right: ${({ nameMargRigth = '1.2rem' }) => nameMargRigth};
      white-space: nowrap;
   }
`
// ComponentProps
interface CommentsItemProps {
   margin?: string
   name: string
   userComment: string
}

export const CommentsItem: FC<CommentsItemProps> = (
   {
      margin,
      name,
      userComment,
   }
) => {
   return (
      <StyledCommentsItem margin={margin}>
         <StyledTitleText
            as='span'
            fontSize={'1.6rem'}
            md2FontSize={'1.6rem'}
            md3FontSize={'1.6rem'}
            md4FontSize={'1.6rem'}
         >
            {name}
         </StyledTitleText>
         <StyledBodyText>
            {userComment}
         </StyledBodyText>
      </StyledCommentsItem>
   );
};
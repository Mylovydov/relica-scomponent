import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';
import { Avatar } from '../../../common/avatar/Avatar';
import { StyledCaptionText, StyledTitleText } from '../../../typography/Typography1';
import { TotalItemBody } from './TotalItemBody';
import { TotalItemIcon } from './TotalItemIcon';
import { TotalItemText } from './TotalItemText';

// StyledProps

// Styled
const StyledTotalItem = styled.div`
   border: .1rem solid ${({ theme }) => theme.colors.totalIconsBrdr};
   border-radius: 1rem;

   p {
      white-space: nowrap;
   }

   span {
      margin: .3rem 0 0 0;
      display: block;
   }
`
// ComponentProps
interface TotalItemProps {
   totalData: string
   color?: 'green' | 'orange'
   totalPretitle: string
   iconPath: string
}

export const TotalItem: FC<TotalItemProps> = (
   {
      totalData,
      color = baseTheme.colors.primary,
      totalPretitle,
      iconPath
   }
) => {

   const itemColor = color === 'green' ?
      baseTheme.colors.lightGreen :
      color === 'orange' ? baseTheme.colors.orange :
      color
      
   return (
      <StyledTotalItem>
         <TotalItemBody>
            <TotalItemIcon>
               <Avatar
                  imgSize={'6rem'}
                  imagePath={iconPath}
               />
            </TotalItemIcon>

            <TotalItemText>
               <StyledCaptionText
                  as={'p'}
                  fontSize={'1.6rem'}
                  md2FontSize={'1.6rem'}
                  md3FontSize={'1.6rem'}
                  md4FontSize={'1.6rem'}
                  weight={'500'}
               >
                  {totalPretitle}
               </StyledCaptionText>

               <StyledTitleText
                  as={'span'}
                  color={itemColor}
                  fontSize={'3.5rem'}
                  md2FontSize={'3.5rem'}
                  md3FontSize={'3.5rem'}
                  md4FontSize={'3.5rem'}
               >
                  {totalData}
               </StyledTitleText>
            </TotalItemText>
         </TotalItemBody>
      </StyledTotalItem>
   )
};
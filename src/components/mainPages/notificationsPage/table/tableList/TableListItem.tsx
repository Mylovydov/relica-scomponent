import React, { FC } from 'react';

import styled from 'styled-components';
import { baseTheme } from '../../../../../styles/theme';
import { Avatar } from '../../../../common/avatar/Avatar';
import { StyledSubtitleText } from '../../../../typography/Typography1';
import { TableItem } from '../tableItem/TableItem';
import TableItemBody from '../tableItem/TableItemBody';
import { TableItemColumn } from '../tableItem/TableItemColumn';

// StyledProps

// Styled
const StyledTableListItem = styled.li`
   border-bottom: .1rem solid ${({ theme }) => theme.colors.totalIconsBrdr};
`
// export type postStatisticsItem = {
//    postImage: string,
//    postLikes: string, likesEarned: string,
//    postComments: string, commentsEarned: string,
//    postFavourites: string, favouritesEarned: string
// }
// ComponentProps
interface TableListItemProps {
   postImage: string
   postLikes: string
   likesEarned: string
   postComments: string
   commentsEarned: string
   postFavourites: string
   favouritesEarned: string
}

export const TableListItem: FC<TableListItemProps> = (
   {
      postImage,
      postLikes,
      likesEarned,
      postComments,
      commentsEarned,
      postFavourites,
      favouritesEarned
   }
) => {
   return (
      <StyledTableListItem>
         <TableItem>
            <TableItemBody>
               <TableItemColumn>
                  <Avatar
                     imgSize={'8rem'}
                     imagePath={postImage}
                     brdrRadius={'0.7rem'}
                  />
               </TableItemColumn>
               <TableItemColumn>
                  <StyledSubtitleText>
                     {postLikes}
                  </StyledSubtitleText>
                  <StyledSubtitleText
                     fontSize={'3rem'}
                     md2FontSize={'3rem'}
                     md3FontSize={'3rem'}
                     md4FontSize={'3rem'}
                     color={baseTheme.colors.green}
                  >
                     + ${likesEarned}
                  </StyledSubtitleText>
               </TableItemColumn>
               <TableItemColumn>
                  <StyledSubtitleText>
                     {postComments}
                  </StyledSubtitleText>
                  <StyledSubtitleText
                     fontSize={'3rem'}
                     md2FontSize={'3rem'}
                     md3FontSize={'3rem'}
                     md4FontSize={'3rem'}
                     color={baseTheme.colors.green}
                  >
                     + ${commentsEarned}
                  </StyledSubtitleText>
               </TableItemColumn>
               <TableItemColumn>
                  <StyledSubtitleText>
                     {postFavourites}
                  </StyledSubtitleText>
                  <StyledSubtitleText
                     fontSize={'3rem'}
                     md2FontSize={'3rem'}
                     md3FontSize={'3rem'}
                     md4FontSize={'3rem'}
                     color={baseTheme.colors.green}
                  >
                     + ${favouritesEarned}
                  </StyledSubtitleText>
               </TableItemColumn>
            </TableItemBody>
         </TableItem>
      </StyledTableListItem>
   );
};
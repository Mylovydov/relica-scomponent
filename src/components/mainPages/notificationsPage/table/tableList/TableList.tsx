import React, { FC } from 'react';

import styled from 'styled-components';
import { postStatisticsItem } from '../../../../../containers/NotificationsPageTabsContainer';

import { TableListItem } from './TableListItem';

// import { postStatisticsItem }

// StyledProps

// Styled

// ComponentProps
interface TableListProps {
   tableData: postStatisticsItem[]
}

export const TableList: FC<TableListProps> = ({ tableData }) => {

   const tableItems = tableData.map((post, i) => {
      return <TableListItem {...post} key={i}/>
   })

   return (
      <ul>
         {tableItems}
      </ul>
   );
};
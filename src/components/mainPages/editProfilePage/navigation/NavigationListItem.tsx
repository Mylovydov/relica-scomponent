import React, { FC } from 'react';
import styled from 'styled-components';

import { StyledContactsListItem } from '../../chatPage/contacts/ContactsListItem';

// StyledProps

// Styled
const StyledNavigationListItem = styled(StyledContactsListItem)`
   padding: 0;

   a {
      padding: 3rem 2rem;
   }
`
// ComponentProps

export const NavigationListItem: FC = (props) => {
   return <StyledNavigationListItem {...props} />
};
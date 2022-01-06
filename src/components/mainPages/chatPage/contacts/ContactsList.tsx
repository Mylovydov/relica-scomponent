import React, { FC } from 'react';

import { ContactsListItem } from './ContactsListItem';
import { UsersItem } from '../../../../containers/ChatActionsContainer'

// StyledProps

// Styled

// ComponentProps
interface ContactsListProps {
   dataUsers: UsersItem[]
}


export const ContactsList: FC<ContactsListProps> = ({ dataUsers }) => {

   const ChatСontacts = dataUsers.map((contact, i) => {
      return <ContactsListItem {...contact} key={i}/>
   })

   return (
      <ul>
         {ChatСontacts}
      </ul>
   );
};
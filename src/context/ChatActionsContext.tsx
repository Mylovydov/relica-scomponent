import React, { createContext, FC, useContext, useState } from 'react';
import { UsersItem } from '../containers/ChatActionsContainer';

export const ChatActionsContext = createContext({
   contacts: [],
   setContacts: (data: any) => {},
   searchContact: (contacts: UsersItem[], term: string) => {},
   updateSearch: (term: string) => {},
   term: ''
})

export const useChatActions = () => {
   return useContext(ChatActionsContext)
}

export const ChatActionsProvider: FC = ({ children }) => {

   const [contacts, setContacts] = useState([])

   const setChatContactsCb = (data: any) => {setContacts(data)}

   const [term, setTerm] = useState('')

   const searchContact = (contacts: UsersItem[], term: string) => {
      if (term.length === 0) {
         return contacts
      }

      return contacts.filter(contact => contact.messageAuthorName.toLowerCase().includes(term.toLowerCase()))
   }

   const onUpdateSearch = (term: string) => {
      setTerm(term)
   }

   return (
      <ChatActionsContext.Provider value={{
         contacts: contacts,
         setContacts: setChatContactsCb,
         searchContact: searchContact,
         updateSearch: onUpdateSearch,
         term: term
      }}>
         {children}
      </ChatActionsContext.Provider>
   );
};

export default ChatActionsContext;
import React, { FC, useState } from 'react';


import { ChatActions } from '../components/mainPages/chatPage/chatActions/ChatActions';
import { ChatActionsHeader } from '../components/mainPages/chatPage/chatActions/ChatActionsHeader';
import { ChatActionsContent } from '../components/mainPages/chatPage/chatActions/ChatActionsContent'
import { SearchForm } from '../components/common/form/searchForm/SearchForm';
import { Contacts } from '../components/mainPages/chatPage/contacts/Contacts';
import { ContactsList } from '../components/mainPages/chatPage/contacts/ContactsList';

export type UsersItem = {avatarPath: string, messageAuthorName: string, message: string, unreadMessages?: string}

// const users = [
//    {avatarPath: "/assets/chat-avatar/chat-avatar-1.webp", messageAuthorName: "Layla Brown", message: 'Nice to meet you too!'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-2.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too! Nice to meet you too!', unreadMessages: '5'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-3.webp", messageAuthorName: "Max Richardson", message: 'Nice to meet you too!', unreadMessages: '1'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-4.webp", messageAuthorName: "Marcus Joans", message: 'Nice to meet you too!', unreadMessages: '45'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-5.webp", messageAuthorName: "Lilly Anderson", message: 'Nice to meet you too!', unreadMessages: '9999'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-4.webp", messageAuthorName: "Marcus Joans", message: 'Nice to meet you too!', unreadMessages: '45'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-3.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too!', unreadMessages: '5'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-1.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too!', unreadMessages: '5'},
//    {avatarPath: "/assets/chat-avatar/chat-avatar-4.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too!', unreadMessages: '5'},
// ]


export const ChatActionsContainer: FC = () => {
   const [chatContacts, setChatContacts] = useState([
      {avatarPath: "/assets/chat-avatar/chat-avatar-1.webp", messageAuthorName: "Layla Brown", message: 'Nice to meet you too!'},
      {avatarPath: "/assets/chat-avatar/chat-avatar-2.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too! Nice to meet you too!', unreadMessages: '5'},
      {avatarPath: "/assets/chat-avatar/chat-avatar-3.webp", messageAuthorName: "Max Richardson", message: 'Nice to meet you too!', unreadMessages: '1'},
      {avatarPath: "/assets/chat-avatar/chat-avatar-4.webp", messageAuthorName: "Marcus Joans", message: 'Nice to meet you too!', unreadMessages: '45'},   {avatarPath: "/assets/chat-avatar/chat-avatar-5.webp", messageAuthorName: "Lilly Anderson", message: 'Nice to meet you too!', unreadMessages: '9999'},
      {avatarPath: "/assets/chat-avatar/chat-avatar-4.webp", messageAuthorName: "Marcus Joans", message: 'Nice to meet you too!', unreadMessages: '45'},
      {avatarPath: "/assets/chat-avatar/chat-avatar-3.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too!', unreadMessages: '5'},
      {avatarPath: "/assets/chat-avatar/chat-avatar-1.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too!', unreadMessages: '5'},
      {avatarPath: "/assets/chat-avatar/chat-avatar-4.webp", messageAuthorName: "John Smith", message: 'Nice to meet you too!', unreadMessages: '5'},
   ])

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

   const visibleContacts = searchContact(chatContacts, term)

   return (
      <ChatActions>
         <ChatActionsHeader>

            <SearchForm
               action={onUpdateSearch}
               placeholder='Search for users that you follow'
               searchInputName='user search form in contacts'
            />

         </ChatActionsHeader>

         <ChatActionsContent>

            <Contacts>
               <ContactsList dataUsers={visibleContacts}/>
            </Contacts>

         </ChatActionsContent>
      </ChatActions>
   );
};
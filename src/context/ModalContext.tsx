import React, { FC, useContext } from 'react';
import { useState } from 'react';

const ModalContext = React.createContext({
   visible: false,
   toggle: () => {},
})

export const useModal = () => {
   return useContext(ModalContext)
}

export const ModalProvider: FC = ({ children }) => {

   const [modal, setModal] = useState(false)

   const onToggle = () => setModal(modalStatus => !modalStatus)

   return (
      <ModalContext.Provider value={{
         visible: modal,
         toggle: onToggle
      }}>
         {children}
      </ModalContext.Provider>
   );
};
import React, { FC} from 'react';

import styled from 'styled-components';
import { useModal } from '../../../context/ModalContext';

// StyledProps

// Styled
const StyledPopupCloseIcon = styled.div`
   width: 1.9rem;
   height: 1.9rem;
   position: absolute;
   top: 50%;
   right: 1.6rem;
   cursor: pointer;
   z-index: 30;
   transform: translateY(-50%);
`
// ComponentProps

export const PopupCloseIcon: FC = (props) => {
   const { toggle } = useModal()

   return <StyledPopupCloseIcon {...props} onClick={toggle}/>
};
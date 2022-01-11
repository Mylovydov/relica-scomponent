import React, { FC, MouseEventHandler } from 'react';

import styled from 'styled-components';

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
interface PopupCloseIconProps {
   action: MouseEventHandler
}

export const PopupCloseIcon: FC<PopupCloseIconProps> = ({action, ...props}) => {
   return <StyledPopupCloseIcon {...props} onClick={action}/>
};
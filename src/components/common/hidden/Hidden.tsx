import React, { FC } from 'react';
import styled, {css} from 'styled-components';

import { baseTheme } from '../../../styles/theme';


export enum hiddenVariants {
   desktopDown = 'desktopDown',
   desktopUp = 'desktopUp'
}

// StyledProps
interface StyledHiddenProps {
   mediaVisible?: string
}
// Styled

const hiddenStyle = css`
   position: absolute;
   overflow: hidden;
   opacity: 0;
   z-index: -1;
   width: 0.1px;
   height: 0.1px;

   transition: all .2s linear;
`

const StyledHidden = styled.div<StyledHiddenProps>`
   ${props => {
      if (props.mediaVisible) {
         if (props.mediaVisible === 'desktopUp') {
            return `@media (max-width: ${baseTheme.media.md2}) {${hiddenStyle}}`
         }
         if (props.mediaVisible === 'desktopDown') {
            return `@media (min-width: ${baseTheme.media.md2}) {${hiddenStyle}}`
         }
      }
   }}
`

// ComponentProps
interface HiddenProps {
   mediaVisible: string
}

export const Hidden: FC<HiddenProps> = (props) => {
   return (
      <StyledHidden {...props}/>
   );
};
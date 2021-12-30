import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../styles/theme';

// Styled
const StyledAuthBody = styled.div`
   /* display: block; */
   /* height: 100%; */
   @media (min-width: ${baseTheme.media.md2}) {
      display: flex;
      height: 100%;
   }
`

// ComponentProps
// interface AuthBodyProps {

// }

export const AuthBody: FC = ({children}) => {
   return (
      <StyledAuthBody>
         {children}
      </StyledAuthBody>
   );
};
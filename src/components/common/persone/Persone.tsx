import React, { FC } from 'react';

import styled from 'styled-components';

import { Avatar } from '../avatar/Avatar';
// StyledProps
// Styled
const StyledPersone = styled.div`
   display: flex;
   align-items: center;
`
// ComponentProps
interface PersoneProps {
   imagePath: string,
   imageAlt?: string
}

export const Persone: FC<PersoneProps> = ({imagePath}) => {
   return (
      <StyledPersone>
         <Avatar
            imagePath={imagePath}
            imageAlt='post user avatar'
            margin={'0 1.5rem 0 0'}
         />
      </StyledPersone>
   );
};
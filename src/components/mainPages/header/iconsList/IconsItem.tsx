import React, { FC } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

// StyledProps
// Styled
const StyledIconsItem = styled.li`
   width: 2.4rem;
   height: 2.4rem;
   margin: 0 0.3rem;
   position: relative;

   span {
      position: absolute;
      top: -.3rem;
      right: -.4rem;
      width: 1.2rem;
      height: 1.2rem;

      background-color: ${({ theme }) => theme.colors.red};
      border-radius: 50%;
      border: .2rem solid ${({ theme }) => theme.colors.white};
   }
`
// ComponentProps
interface IconsItemProps {
   imgPath: string,
   imgAlt?: string,
   to: string
   notification?: boolean
}

export const IconsItem: FC<IconsItemProps> = (
   {
      imgPath,
      imgAlt,
      to,
      notification
   }
) => {
   return (
      <StyledIconsItem>
         <Link to={to}>
            {notification && <span/>}
            <img src={imgPath} alt={imgAlt}/>
         </Link>

      </StyledIconsItem>
   );
};
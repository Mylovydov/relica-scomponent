import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledCommentsProps {
   margin?: string
}
// Styled
const StyledComments = styled.div<StyledCommentsProps>`
   h6 {
      cursor: pointer;
      display: inline-block;
      margin: ${({ margin = '0 0 1.5em 0'}) => margin};
   }`

// ComponentProps
interface CommentsProps {
   margin?: string
}

export const Comments: FC<CommentsProps> = (props) => {
   return <StyledComments {...props}/>
};
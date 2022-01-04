import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledContainerProps {
   maxWidth?: string
}

// Styled
const StyledContainer = styled.div<StyledContainerProps>`
   max-width: ${({ theme, ...props }) => props.maxWidth || theme.sizes.maxWidthContainer};
   margin: 0 auto;
   padding: 0 1.5rem;
   width: 100%;
   height: 100%;
`

// ComponentProps

export const Container: FC = (props) => {
   return <StyledContainer {...props}/>
};
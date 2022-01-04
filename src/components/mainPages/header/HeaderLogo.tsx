import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps
interface StyledHeaderLogoProps {
   flex?: string
}
// Styled
const StyledHeaderLogo = styled.div<StyledHeaderLogoProps>`
   flex: ${props => props.flex || '0 0 14rem'};
`

// ComponentProps

export const HeaderLogo: FC = (props) => {
   return <StyledHeaderLogo {...props}/>
};
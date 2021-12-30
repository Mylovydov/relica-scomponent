import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme'

// StyledProps

// Styled
const StyledLogoIcon = styled.img`
   max-width: 100%;
   display: block;
`

// ComponentProps
interface LogoIconProps {
   imgPath: string
}

export const LogoIcon: FC<LogoIconProps> = ({imgPath}) => {
   return (
      <>
         <StyledLogoIcon src={imgPath}/>
      </>
   )
}
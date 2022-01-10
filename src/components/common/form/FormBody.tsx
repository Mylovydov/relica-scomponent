import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledFormBodyProps {
   margin?: string
}
// Styled
const StyledFormBody = styled.div<StyledFormBodyProps>`
   margin: ${({ margin }) => margin};
	border-bottom: .1rem solid ${({ theme }) => theme.colors.chatBorder};
`
// ComponentProps
interface FormBodyProps {
   margin?: string
}

export const FormBody: FC<FormBodyProps> = (props) => {
   return <StyledFormBody {...props} />
};
import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps
interface StyledPopupFormWrapperProps {
    padding?:string
}
// Styled
const StyledPopupFormWrapper = styled.div<StyledPopupFormWrapperProps>`
    padding: ${({ padding }) => padding};
`
// ComponentProps
interface PopupFormWrapperProps {
    padding?:string
}

export const PopupFormWrapper: FC<PopupFormWrapperProps> = (props) => {
    return <StyledPopupFormWrapper {...props} />
};
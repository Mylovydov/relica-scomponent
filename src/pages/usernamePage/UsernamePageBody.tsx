import React, { FC } from 'react';
import styled from 'styled-components';


// StyledProps

 // Styled
 const StyledUsernamePageBody = styled.div`

 `
 
 // ComponentProps
export const UsernamePageBody: FC = (props) => {
    return (
        <StyledUsernamePageBody {...props}/>
    );
};
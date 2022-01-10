import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledUploadPhotoInput = styled.div`
    flex: 0 0 21rem;
    margin: 0 1rem 0 0;
    position: relative;
`
// ComponentProps


export const UploadPhotoInput: FC = (props) => {
    return <StyledUploadPhotoInput {...props} />
};
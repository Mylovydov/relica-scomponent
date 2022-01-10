import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledUploadPhotoBody = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 2rem 0;
    overflow: auto;
`
// ComponentProps
export const UploadPhotoBody: FC = (props) => {
    return <StyledUploadPhotoBody {...props} />
};
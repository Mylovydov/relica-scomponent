import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledUploadPhotoContent = styled.div`
    flex: 1 1 auto;
`
// ComponentProps


export const UploadPhotoContent: FC = (props) => {
    return <StyledUploadPhotoContent {...props} />
};
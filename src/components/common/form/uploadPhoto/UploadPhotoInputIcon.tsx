import React, { FC } from 'react';
import styled from 'styled-components';

// StyledProps

// Styled
const StyledUploadPhotoInputIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        white-space: nowrap;
    }
`
// ComponentProps


export const UploadPhotoInputIcon: FC = (props) => {
    return <StyledUploadPhotoInputIcon {...props} />
};
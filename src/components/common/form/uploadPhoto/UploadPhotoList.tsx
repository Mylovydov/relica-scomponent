import React, { FC } from 'react';
import styled from 'styled-components';
import { UploadPhotoListItem } from './UploadPhotoListItem';

// StyledProps

// Styled
const StyledUploadPhotoList = styled.ul`
    display: flex;
    align-items: center;
`

// ComponentProps


export const UploadPhotoList: FC = () => {
    return (
        <StyledUploadPhotoList>
            <UploadPhotoListItem/>
            <UploadPhotoListItem/>
            <UploadPhotoListItem/>
            <UploadPhotoListItem/>
            <UploadPhotoListItem/>
            <UploadPhotoListItem/>
            <UploadPhotoListItem/>
            <UploadPhotoListItem/>
        </StyledUploadPhotoList>
    );
};
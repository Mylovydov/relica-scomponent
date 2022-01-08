import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps

// Styled
const StyledFileInput = styled.input`
    position: absolute;
    overflow: hidden;
    opacity: 0;
    z-index: -1;
    width: 0.1px;
    height: 0.1px;

    transition: all .2s linear;
`

// ComponentProps
interface FileInputProps {
    fileInputId: string
}

export const FileInput: FC<FileInputProps> = ({fileInputId}) => {
    return <StyledFileInput type="file" id={fileInputId}/>
};
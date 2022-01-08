import React, { FC } from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../../styles/theme';
import { StyledTitleText, StyledCaptionText } from '../../../typography/Typography1';
import { FormGroup } from '../FormGroup'
import { FileInput } from './FileInput'
import { FileLabel } from './FileLabel';

// StyledProps


// Styled
const StyledFileItem = styled.div`
    position: relative;
`


const StyledFileContent = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2rem;
    width: 100%;
    height: 100%;
`

const StyledFileImage = styled.div`
    display: block;
    flex: 0 0 7rem;

    @media (max-width: ${baseTheme.media.md4}) {
        flex: 0 0 6rem;
    }
`

const StyledFileImageIcon = styled.div`
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3rem;
        height: 2.4rem;
        z-index: 1;

        transform: translate(-50%, -50%);

        background: url("/assets/photo-camera.svg") no-repeat;
        background-size: 3rem 2.4rem;

        display: block;

        @media (max-width: ${baseTheme.media.md4}) {
            width: 2.7rem;
            background-size: 2.6rem 2.4rem;
        }
    }

    img {
        width: 100%;
    }
`

const StyledFileText = styled.div`
    padding-left: 2.5rem;
    flex: 1 1 auto;

    p {
        margin-top: 0.7rem;
        color: #121212;
        font-size: 1.2rem;
        line-height: 166.6666666667%;
        font-weight: 400;
    }
`


// ComponentProps
interface FileItemProps {
    fileInputId: string
    fileInputFor: string
    fileImg: string
    fileImgAlt?: string
    fileInnerTitle?: string
    fileInnerSubtitle?: string
}

export const FileItem: FC<FileItemProps> = (
    {
        fileInputId, 
        fileInputFor, 
        fileImg,
        fileImgAlt,
        fileInnerTitle,
        fileInnerSubtitle,
    }
    ) => {
    return (
        <FormGroup>
            <StyledFileItem>
                <FileInput fileInputId={fileInputId} />
                <FileLabel
                    htmlFor={fileInputFor}
                >
                    <StyledFileContent>
                        <StyledFileImage>
                            <StyledFileImageIcon>
                                <img src={fileImg} alt={fileImgAlt} />
                            </StyledFileImageIcon>
                        </StyledFileImage>
                        <StyledFileText>
                            <StyledTitleText
                                as='span'
                                fontSize={'2rem'}
                                md2FontSize={'2rem'}
                                md3FontSize={'2rem'}
                                md4FontSize={'2rem'}
                            >
                                {fileInnerTitle}
                            </StyledTitleText>
                            <StyledCaptionText
                                as={'p'}
                                color={baseTheme.colors.secondary}
                                fontSize={'1.2rem'}
                                md2FontSize={'1.2rem'}
                                md3FontSize={'1.2rem'}
                                md4FontSize={'1.2rem'}
                            >
                                {fileInnerSubtitle}
                            </StyledCaptionText>

                        </StyledFileText>
                    </StyledFileContent>
                </FileLabel>
            </StyledFileItem>
        </FormGroup>
    )
}
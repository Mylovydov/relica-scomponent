import React, { FC } from 'react';

import styled from 'styled-components';
import { AbsoluteIcon } from '../../absoluteIcon/AbsoluteIcon';
import { Avatar } from '../../avatar/Avatar';
import { ImageItem } from '../../imageItem/ImageItem';

// StyledProps

// Styled
const StyledUploadPhotoListItem = styled.li`
    position: relative;
    min-width: 21rem;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;

    &:not(:last-child) {
        margin: 0 1rem 0 0;
    }
`
// ComponentProps


export const UploadPhotoListItem: FC = () => {
    return (
        <StyledUploadPhotoListItem>
            <ImageItem
                imgPath={'/assets/popup-image/popup-img-1.png'}
                paddingBot={'100%'}
            />

            <AbsoluteIcon
                top={'1rem'}
                right={'1rem'}
            >
                <Avatar
                    imgSize={'3.6rem'}
                    imagePath={'/assets/icons/popup-remove-photo.svg'}
                />
            </AbsoluteIcon>
        </StyledUploadPhotoListItem>
    );
};
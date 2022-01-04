import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
// Styled
const StyledPhotoSliderBody = styled.div`
    width: 100%;
    position: relative;
`

const StyledPhotoSliderList = styled.ul``
const StyledPhotoSliderItem = styled.li`
    position: relative;
    padding-bottom: 104.1%;
    border-radius: 1rem;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
    }
`
// ComponentProps

export const PhotoSlider: FC= () => {
    return (
        <div>
            <StyledPhotoSliderBody>
                <StyledPhotoSliderList>
                    <StyledPhotoSliderItem>
                    <img src="/assets/post-image/post-img-1.png" alt="" />
                    </StyledPhotoSliderItem>
                </StyledPhotoSliderList>
            </StyledPhotoSliderBody>
        </div>
    );
};
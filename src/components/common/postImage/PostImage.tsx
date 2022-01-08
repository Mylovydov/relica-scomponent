import React, { FC } from 'react';

import styled from 'styled-components';
import { Image } from '../Image/Image';

// StyledProps
// Styled
const StyledPostImage = styled.div`
    position: relative;
    z-index: 1;
`
// ComponentProps
interface PostImageProps {
    imgPath: string
}

export const PostImage: FC<PostImageProps> = (
    {
        imgPath
    }
) => {
    return (
        <StyledPostImage>
            <Image 
                imgPath={imgPath}
            />
        </StyledPostImage>
    );
};
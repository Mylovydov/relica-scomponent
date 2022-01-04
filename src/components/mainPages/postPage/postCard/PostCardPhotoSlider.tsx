import React, { FC } from 'react';

import styled from 'styled-components';

// StyledProps
interface StyledPostCardPhotoSliderProps {
   margin?: string
}
// Styled
const StyledPostCardPhotoSlider = styled.div<StyledPostCardPhotoSliderProps>`
   margin: ${({ margin }) => margin || '0 0 3rem 0'};
`
// ComponentProps
interface PostCardPhotoSliderProps {
   margin?: string
}

export const PostCardPhotoSlider: FC<PostCardPhotoSliderProps> = (props) => {
   return <StyledPostCardPhotoSlider {...props}/>
};
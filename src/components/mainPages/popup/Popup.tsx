import React, { FC } from 'react';

import styled from 'styled-components';
import { PopupFormContainer } from '../../../containers/PopupFormContainer';

import { Avatar } from '../../common/avatar/Avatar';
import { StyledTitleText } from '../../typography/Typography1';
import { PopupBody } from './PopupBody';
import { PopupCloseIcon } from './PopupCloseIcon';
import { PopupContent } from './PopupContent';
import { PopupHeader } from './PopupHeader';
import { PopupMain } from './PopupMain';

// StyledProps

// Styled
const StyledPopup = styled.div`
	z-index: 100;
	padding: 3rem 1rem;
	position: fixed;
	top: 0px;
	left: 0;
	width: 100%;
	height: 100%;
	transition: visibility 0.8s ease 0s;
	/* visibility: hidden; */

	&::before {
		content: "";
		background-color: #00000052;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		/* opacity: 0; */
		opacity: 1;
		transition: opacity 0.8s ease 0s;
	}

   /* &._active {
		overflow: auto;
		visibility: visible;

		&::before {
			opacity: 1;
		}

		.popup__body {
			transition: all 0.3s ease 0.2s;
			transform: scale(1);
		}
	} */
`
// ComponentProps

export const Popup: FC = () => {
   return (
      <StyledPopup>
         <PopupContent>
            <PopupBody>

               <PopupHeader>
                  <StyledTitleText
                     as={'h4'}
                     fontSize='2rem'
                     md2FontSize={'2rem'}
                     md3FontSize={'2rem'}
                     md4FontSize={'2rem'}
                  >
                     Make a post
                  </StyledTitleText>

                  <PopupCloseIcon>
                     <Avatar
                        imgSize={'2rem'}
                        imagePath={'/assets//icons/e-remove.svg'}
                     />
                  </PopupCloseIcon>
               </PopupHeader>

               <PopupMain>
                  <PopupFormContainer />
               </PopupMain>
            </PopupBody>
         </PopupContent>
      </StyledPopup>
   );
};
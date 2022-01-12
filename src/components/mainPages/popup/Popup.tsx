import React, { FC, MouseEventHandler } from 'react';

import styled from 'styled-components';
import { PopupFormContainer } from '../../../containers/PopupFormContainer';
import { useModal } from '../../../context/ModalContext';

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
	/* padding: 3rem 1rem; */
	position: fixed;
	top: 50%;
	left: 50%;
	/* width: 100%; */
	/* height: 100%; */
	transition: visibility 0.8s ease 0s;
	transform: translate3d(-50%, -50%, 0);

	&::before {
		/* content: "";
		background-color: #00000052;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 1;
		transition: opacity 0.8s ease 0s; */
	}
`

const StyledPopupBlur = styled.div`
	background-color: #00000052;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 50;
	opacity: 1;
	transition: opacity 0.8s ease 0s;
`

// ComponentProps


export const Popup: FC = () => {

	const { visible, toggle } = useModal()

	if (!visible) return null

	return (
		<>
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

							<PopupCloseIcon
							>
								<Avatar
									imgSize={'2rem'}
									imagePath={'/assets/icons/e-remove.svg'}
								/>
							</PopupCloseIcon>
						</PopupHeader>

						<PopupMain>
							<PopupFormContainer />
						</PopupMain>
					</PopupBody>
				</PopupContent>
			</StyledPopup>
			<StyledPopupBlur onClick={toggle}/>
		</>

		
	);
};
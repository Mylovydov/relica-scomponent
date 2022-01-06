import React, { FC } from 'react';

import styled from 'styled-components';
import { StyledSubtitleText } from '../../../typography/Typography1';

// StyledProps

// Styled
const StyledСurrentСommunicationDate = styled.div`
    text-align: center;
`

// ComponentProps
interface СurrentСommunicationDateProps {
    currentDate: string
}

export const СurrentСommunicationDate: FC<СurrentСommunicationDateProps> = ({ currentDate }) => {
    return (
        <StyledСurrentСommunicationDate>
            <StyledSubtitleText as='span' weight={'400'}>
                {currentDate}
            </StyledSubtitleText>
        </StyledСurrentСommunicationDate>
    );
};
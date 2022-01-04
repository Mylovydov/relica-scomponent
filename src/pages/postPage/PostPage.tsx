import React, { FC } from 'react';

import styled from 'styled-components';

import { Container } from '../../components/common/container/Container';
import { PostPageBody } from './PostPageBody';
import { PostPageContainer } from './PostPageContainer';
import { PostPageListContainer } from '../../containers/PostPageListContainer';

// StyledProps

// Styled
const StyledPostPage = styled.section``

// ComponentProps

export const PostPage: FC = () => {
    return (
        <StyledPostPage>
            <PostPageContainer>
                <PostPageBody>
                    <PostPageListContainer/>
                </PostPageBody>
            </PostPageContainer>
        </StyledPostPage>
    )
}
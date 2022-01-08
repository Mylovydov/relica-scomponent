import React, { FC } from 'react';

import { PostPageBody } from './PostPageBody';
import { PostPageListContainer } from '../../containers/PostPageListContainer';
import { ContainerHelper } from '../../components/common/containerHelper/ContainerHelper';


export const PostPage: FC = () => {
    return (
        <section>
            <ContainerHelper>
                <PostPageBody>
                    <PostPageListContainer/>
                </PostPageBody>
            </ContainerHelper>
        </section>
    )
}
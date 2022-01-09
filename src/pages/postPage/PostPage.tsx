import React, { FC } from 'react';

import { PostPageBody } from './PostPageBody';
import { PostPageListContainer } from '../../containers/PostPageListContainer';
import { ContainerHelper80 } from '../../components/common/containerHelper/ContainerHelper80';


export const PostPage: FC = () => {
    return (
        <section>
            <ContainerHelper80>
                <PostPageBody>
                    <PostPageListContainer/>
                </PostPageBody>
            </ContainerHelper80>
        </section>
    )
}
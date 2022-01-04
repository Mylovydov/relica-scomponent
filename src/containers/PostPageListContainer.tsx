import React, { FC } from 'react';

import { PostsList } from '../components/mainPages/postPage/PostsList';

// StyledProps
// Styled
// ComponentProps

const data = [
   {
      avatar: '/assets/profile.png', 
      name: 'Jessica Thorne',
      comment: `Japanese food with my friends Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ali`
   }
]

export const PostPageListContainer: FC = () => {
   return (
      <PostsList dataItems={data}/>
   );
};
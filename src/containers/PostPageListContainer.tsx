import React, { FC } from 'react';

import { PostsList } from '../components/mainPages/postPage/PostsList';

// StyledProps
// Styled
// ComponentProps

const data = [
   {
      avatar: '/assets/profile.png', 
      name: 'Jessica Thorne',
      userComment: `Japanese food with my friends Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ali`,
      likes: '300',
      totalComments: '123',
      postComments: [
         {name: 'John C.', comment: 'На этой странице мы сделаем небольшой обзор документации и других ресурсов, которые могут пригодиться при первом использовании React.'},
         {name: 'Alex M.', comment: 'это JavaScript-библиотека для разработки пользовательского интерфейса.'},
         {name: 'Carl W.', comment: 'Чтобы составить первое впечатление о React, зайдите на главную страницу или во введение.'},
         {name: 'Den M.', comment: 'React изначально был спроектирован так'}
      ]
   },
   {
      avatar: '/assets/profile.png', 
      name: 'Max Richardson',
      userComment: `Holiday with my friends at #place`,
      likes: '15',
      totalComments: '12',
      postComments: [
         {name: 'John C.', comment: 'На этой странице мы сделаем небольшой обзор документации и других ресурсов, которые могут пригодиться при первом использовании React.'},
         {name: 'Alex M.', comment: 'это JavaScript-библиотека для разработки пользовательского интерфейса.'},
         {name: 'Carl W.', comment: 'Чтобы составить первое впечатление о React, зайдите на главную страницу или во введение.'},
         {name: 'Den M.', comment: 'React изначально был спроектирован так'}
      ]
   }
]

export const PostPageListContainer: FC = () => {
   return (
      <PostsList dataItems={data} />
   );
};
import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledScroll = styled.div`
    /* полоса прокрутки (скроллбар) */
::-webkit-scrollbar {
    width: 5px; /* ширина для вертикального скролла */
    height: 5px; /* высота для горизонтального скролла */
    background-color: #ededed;
  }
  
  /* ползунок скроллбара */
  ::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px transparent;
  }
  
  /* // ::-webkit-scrollbar-thumb:hover {
  //   background-color: #ededed;
  // } */
`
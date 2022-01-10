import { createGlobalStyle } from 'styled-components'

import { baseTheme } from './theme'

export default createGlobalStyle`

   * {
      padding: 0px;
      margin: 0px;
      border: 0px;
   }
   *,
   *:before,
   *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
   }
   :focus,
   :active {
      /* outline: none; */
   }
   a:focus,
   a:active {
      /* outline: none; */
   }
   aside,
   nav,
   footer,
   header,
   section {
      display: block;
   }

   html {
      font-size: ${baseTheme.font.globalFontSize};
   }
   html,
   body {
      height: 100%;
      min-width: ${baseTheme.sizes.minWidth};
   }
   body {
      line-height: 1;
      font-family: ${baseTheme.font.fontFamily};
      /* text-rendering: optimizeLegibility; */
      -ms-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
   }
   input,
   button,
   textarea {
      font-family: ${baseTheme.font.fontFamily};
   }
   input::-ms-clear {
      display: none;
   }
   button {
      cursor: pointer;
      background-color: inherit;
   }
   button::-moz-focus-inner {
      padding: 0;
      border: 0;
   }
   a,
   a:visited {
      text-decoration: none;
   }
   a:hover {
      text-decoration: none;
   }
   a {
      display: block;
   }
   ul li {
      list-style: none;
   }
   img {
      vertical-align: top;
      max-width: 100%;
      display: block;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: inherit;
      font-size: inherit;
   }

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
  
  // ::-webkit-scrollbar-thumb:hover {
  //   background-color: #ededed;
  // }
`
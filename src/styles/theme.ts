import { Itheme } from "../interfaces/styled";

const maxWidthContainer = '1200px';
const headerHeigth = '9.6rem';

export const baseTheme: Itheme = {
   colors: {
      primary: '#10A5F5',
      primaryDarken: '#078AD1',
      secondary: '#121212',
      white: '#fff',
      black: '#000',
      gray: '#939393',
      red: '#FF5454',
      green: '#2DB922',
      lightGreen: '#56E3C8',

      tabsControlBrdr: '#D6D6D6',

      postImageHoverBg: '#1B3C4E',

      chatInput: '#EDF2F5CB',
      chatBorder: '#EDEDED',
      chatContactsHover: '#F0F9FD',
      chatMessageBg: '#F5F5F5',
      chatPlaceholder: '#AFAFAF',

      totalIconsBrdr: '#E3E3E3',
      categoryTableBgColor: '#FAFBFC'
   },

   sizes: {
      minWidth: '320px',
      headerHeigth: headerHeigth,
      maxWidth: '1920px',
      maxWidthContainer: maxWidthContainer,
   },

   media: {
      md1: maxWidthContainer,
      md2: '991.98px',
      md3: '767.98px',
      md4: '479.98px'
   },

   font: {
      globalFontSize: '10px',
      fontFamily: "'Roboto', sans-serif",
      weight: 400 | 500 | 700
   },

   // z-index
   order: {
      zIndexHeader: 50,
   }
}
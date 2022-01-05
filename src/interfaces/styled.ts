

export interface Itheme {
   colors: {
      primary: string,
      primaryDarken: string,
      secondary: string,
      white: string,
      black: string,
      gray: string,
      red: string,
      green: string,
      lightGreen: string,

      tabsControlBrdr: string,

      postImageHoverBg: string,

      chatInput: string,
      chatBorder: string,
      chatContactsHover: string,
      chatMessageBg: string,
      chatPlaceholder: string,

      totalIconsBrdr: string,
      categoryTableBgColor: string
   },

   sizes: {
      minWidth: string,
      headerHeigth: string,
      maxWidth: string,
      maxWidthContainer: string,
   },

   media: {
      md1: string,
      md2: string,
      md3: string,
      md4: string
   },

   font: {
      globalFontSize: string,
      fontFamily: string,
   },

   // z-index
   order: {
      zIndexHeader: number,
   }
}
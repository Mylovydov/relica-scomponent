import React from 'react';

import { Routers } from './router/Routers';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global'
import { baseTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Routers />
      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;
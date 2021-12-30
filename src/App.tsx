import React from 'react';

import { Router } from './router/Router';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global'
import { baseTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Router />
      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;
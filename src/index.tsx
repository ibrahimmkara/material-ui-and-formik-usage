import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

import { ThemeProvider } from '@material-ui/core';
import { theme } from "styles/theme.styles"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



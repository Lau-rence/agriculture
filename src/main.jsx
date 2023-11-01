import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import customTheme from './customTheme.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme.fonts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);

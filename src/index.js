import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import theme from './components/theme';
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Home />
     </ChakraProvider>
    
  </React.StrictMode>
);

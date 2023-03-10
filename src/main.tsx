import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './config/chakraConfig';
import { CartProvider } from './context/cart';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>
);

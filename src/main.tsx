import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './components/commons/styles/Theme';
import ProductsProvider from './context/products';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </ChakraProvider>
);

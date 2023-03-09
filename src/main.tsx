import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './components/commons/styles/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <App />
  </ChakraProvider>
);

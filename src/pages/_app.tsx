import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvier } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';


if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvier>
        <Component {...pageProps} />
      </SidebarDrawerProvier>
    </ChakraProvider>
  )
}

export default MyApp

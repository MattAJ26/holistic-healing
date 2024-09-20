import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// chacckra ui settings
// -------------------
import { Box, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// shaka settings
// -------------

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


function App() {
  return (
    <ChakraProvider theme={theme}>


    <ApolloProvider client={client}>
      {/* <Headers /> */}
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />
        <NavTabs/>
      </div>
    </ApolloProvider>
        </ChakraProvider>
  );
}

export default App;

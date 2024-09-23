import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// chacckra ui settings
// -------------------
import { Box, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
    


    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
      {/* <Headers /> */}
      <NavTabs/>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        
        <Outlet />
      </div>
      <Footer/>
      </ChakraProvider>
    </ApolloProvider>
        
  );
}

export default App;

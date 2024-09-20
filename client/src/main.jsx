import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// chacckra ui settings
// -------------------
// import { ChakraProvider } from '@chakra-ui/react';
// import { extendTheme } from '@chakra-ui/react'
// import * as ReactDOM from 'react-dom/client'

import App from './App.jsx';
import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/matchup',
        element: <Matchup />
      }, {
        path: '/matchup/:id',
        element: <Vote />
      },
    ],
  },
]);


// shaka settings
// -------------

// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <ChakraProvider theme={theme}>
  <RouterProvider router={router} />
  // </ChakraProvider>
);

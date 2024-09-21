import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import App from './App.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login';

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
        path: '/about',
        element: <About />
      }, {
        path: '/services',
        element: <Services />
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/login',
        element: <Login />
      },  
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />
  
);

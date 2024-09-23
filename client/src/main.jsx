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
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import DashboardServices from './pages/Dashboard/DashboardServices.jsx';
import DashboardMembers from './pages/Dashboard/DashboardMembers.jsx';
import DashboardAppointments from './pages/Dashboard/DashboardAppointments.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'services', 
            element: <DashboardServices />,
          },
          {
            path: 'members',
            element: <DashboardMembers />,
          },
          {
            path: 'appointments',
            element: <DashboardAppointments />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

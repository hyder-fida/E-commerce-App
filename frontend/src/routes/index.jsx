import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: 'home',
          element: <Home/>
        }
      ]
    },
  ]);
  
  export default router;

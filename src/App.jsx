import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Home from './components/pages/Home'
import Staff from './components/pages/Staff'
import Layout from './components/Layout/Layout';

const route = createBrowserRouter([

  {
    path: '/', element: <Layout />, children: [
      {
        index: true, element:
          <Home />
      },
      {
        path: 'home', element:
          <Home />
      },
      {
        path: 'staff', element:
          <Staff />
      }
      


    ]
  }



])





export default function App() {


  return <>
   


        <RouterProvider router={route} />


    
  </>

}

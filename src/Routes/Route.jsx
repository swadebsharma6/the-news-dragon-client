import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home> 
        }
      ]
    },
  ]);

// const Route = () => {
//     return (
//         <div>
//             <RouterProvider router={router} />  
//         </div>
//     );
// };

export default router;
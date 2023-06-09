import React from 'react';

import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import NewsLayOut from '../Layout/NewsLayOut';
import News from '../Pages/News/News/News';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home> 
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayOut></NewsLayOut>,
      children: [
        {
          path: ':id',
          element: <News></News>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

// const Route = () => {
//     return (
//         <div>
//             <RouterProvider router={router} />  
//         </div>
//     );
// };

export default router;
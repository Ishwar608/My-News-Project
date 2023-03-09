import React from 'react'
import AddEditNew from './AddEditNew';
import Home from './Home';
import NewS from './NewS';
import NoPage from './NoPage';

export default function AllPage() {
  const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/addNews',
        element:<AddEditNew/>
    },
    {
        path:'/editNews/:id',
        element:<AddEditNew/>
    },
    {
        path:'/news/:id',
        element:<NewS/>
    },
  
    {
        path:'*',
        element:<NoPage/>
    },
  
  ]
  return routes;
}

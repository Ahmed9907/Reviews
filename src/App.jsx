import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Review from './Components/Review/Review'
import toast , { Toaster } from 'react-hot-toast'


export default function App() {

  let routers = createHashRouter([
    { path: "", element: <Layout/> , children: [
      {index:true , element: <Review/> },

    ]}
  ])

  return  <>
  <RouterProvider router={routers}></RouterProvider>
<Toaster/>

    </>

}


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routers } from './routes/Router';


const router = createBrowserRouter(routers);



function App() {


  return (<RouterProvider router={router} />)
}

export default App

import Layout from "../layout/Layout";
import Basket from "../pages/Basket";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ShowTimes from "../pages/ShowTimes";

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail',
        element: <Detail />
      },
      
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/showTime',
        element: <ShowTimes />
      },
      
      {
        path: '/basket',
        element: <Basket/>
      },
    ]
  },
        
  {
    path: '/login',
    element: <Login />
  },
]
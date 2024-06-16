import Layout from "../layout/Layout";
import About from "../pages/About";
import Basket from "../pages/Basket";
import BuyTicket from "../pages/BuyTicket";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
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
      
      {
        path: '/about',
        element: <About/>
      },
      
      {
        path: '/table',
        element: <Movie/>
      },
      
      {
        path: '/buyticket',
        element: <BuyTicket/>
      },
    ]
  },
        
  {
    path: '/login',
    element: <Login />
  },
]
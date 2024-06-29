import Layout from "../layout/Layout";
import About from "../pages/About";
import Admin from "../pages/Admin";
import AsistanChat from "../pages/AsistanChat";
import AsistanPage from "../pages/AsistanPage";
import Basket from "../pages/Basket";
import BuyTicket from "../pages/BuyTicket";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import NotFound from "../pages/NotFound";
import Profil from "../pages/Profil";
import ReklamPanel from "../pages/ReklamPanel";
import ShowTimes from "../pages/ShowTimes";
import SliderSlice from "../pages/SliderSlice";
import UserPanel from "../pages/UserPanel";
import { ProtectedAdmin, ProtectedAdminAsistan, ProtectedProfil } from "./Protected";


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
        path: "/detail/:id",
        element: <Detail />,
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
        path: '/buyticket/:id',
        element: <BuyTicket/>
      },
      {
        path: '/buyticket',
        element: <BuyTicket/>
      },
      
      {
        path: '/profile',
        element:(

          <ProtectedProfil element={<Profil/>} profile={true} />
        )
      },
    ]
  },
        
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element:(

      <ProtectedAdmin element={<Admin/>} admin={true} />
    )

  },
  {
    path:'/userAdmin',
    element:<UserPanel/>
  }
  ,
  {
    path:'/reklamAdmin',
    element:<ReklamPanel/>
  }
  ,
  {
    path:'/advertAdmin',
    element:<SliderSlice/>
  }
  ,
  {
    path: '/chat',
    element: <AsistanChat/>
  },
  {
    path: '/*',
    element: <NotFound/>
  },

{
  path: '/help',
  element:(

    <ProtectedAdminAsistan element={<AsistanPage/>} admin={true} />
  )
},

]
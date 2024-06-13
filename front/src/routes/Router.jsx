import Layout from "../layout/Layout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
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
        path: '/showTime',
        element: <ShowTimes />
      },
    ]
  },
]
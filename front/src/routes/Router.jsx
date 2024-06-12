import Layout from "../layout/Layout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

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
    ]
  },
]
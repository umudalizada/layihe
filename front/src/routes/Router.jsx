import Layout from "../layout/Layout";
import Home from "../pages/Home";

export const routers=[
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]
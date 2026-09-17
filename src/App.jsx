import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./MainLayout/Layout";
import Home from "./Home";
import Movies from "./Movies";

function Route() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {index: true,
       element: <Home />
      },
      {
        path:"/movies",
        element:<Movies />
      }
    ]
  },
]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Route

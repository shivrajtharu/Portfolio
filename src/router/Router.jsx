import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NavBar from "../components/NavBar";

const Layout = () => (
  <>
    <NavBar />
    <Outlet /> {/* renders child routes */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

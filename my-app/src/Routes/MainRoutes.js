import Auth from "../components/auth/Auth/Auth";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../components/home/Home";

const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <Auth /> },
  { path: "/login", element: <Auth /> },
  { path: "/dashboard", element: <Dashboard /> },
];
export default mainRoutes;


import Auth from "../components/auth/Auth/Auth";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../components/home/Home";

const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Auth /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/signup", element: <Auth /> },
];
export default mainRoutes;


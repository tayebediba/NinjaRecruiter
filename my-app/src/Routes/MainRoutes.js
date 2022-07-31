import Auth from "../components/auth/Auth/Auth";
import Home from "../components/home/Home";

const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Auth /> },
  { path: "/signup", element: <Auth /> },
];
export default mainRoutes;


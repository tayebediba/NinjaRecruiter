import Auth from "../components/auth/Auth/Auth";
import Dashboard from "../components/dashboard/Dashboard";
import EducationalBackground from "../components/dashboard/employer/EducationalBackground/EducationalBackground";
import Home from "../components/home/Home";

const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <Auth /> },
  { path: "/login", element: <Auth /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/EducationalBackground/", element: <EducationalBackground /> },
];
export default mainRoutes;

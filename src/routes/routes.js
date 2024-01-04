import Login from "../views/auth/Login";
import Dashboard from "../views/Dashboard";
import Settings from "../views/Settings";
import Profile from "../views/Profile";

const routes = [
  {
    path: "/login",
    element: Login,
    public: false,
  },
  {
    path: "/dashboard",
    element: Dashboard,
    private: true,
  },
  {
    path: "/settings",
    element: Settings,
    private: true,
  },
  {
    path: "/profile",
    element: Profile,
    private: true,
  },
];

export default routes;

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import routes from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./layouts/Layout";
import { useAuth } from "./hooks/useAuth";
import PublicRoute from "./routes/PublicRoute";
import NotFound from "./views/404";

const App = () => {
  const auth = useAuth();

  const toRedirect = () => <Navigate to={auth ? "/dashboard" : "/login"} />;

  const processRoutes = () => {
    return routes.map((route) => {
      const routeElement = <route.element />;
      return {
        ...route,
        element: route.private ? (
          <PrivateRoute>
            <Layout>{routeElement}</Layout>
          </PrivateRoute>
        ) : (
          <PublicRoute>{routeElement}</PublicRoute>
        ),
      };
    });
  };

  const processedRoutes = processRoutes();

  processedRoutes.push({ path: "*", element: (auth || !auth) && <NotFound /> });

  processedRoutes.push({
    path: "/",
    element: toRedirect(),
  });

  const router = createBrowserRouter(processedRoutes);

  return <RouterProvider router={router} />;
};

export default App;

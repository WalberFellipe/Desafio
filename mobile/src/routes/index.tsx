import { useAuth } from "../hooks/auth.hooks";
import { LoadingScreen } from "../screens/LoadingScreen";
import { AuthenticatedRoutes } from "./authenticated.routes";
import { PublicRoutes } from "./public.routes";

const Routes = () => {
  const { isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? <AuthenticatedRoutes /> : <PublicRoutes />
}

export { Routes };


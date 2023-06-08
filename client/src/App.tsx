import { RouterComponent } from './components/RouterComponent/RouterComponent';
import { useAuth } from './hooks/useAuth';

export const App = () => {
  const { isAuthorised } = useAuth();

  return <RouterComponent isAuthorised={isAuthorised} />;
};

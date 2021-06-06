import { RouteProps } from 'react-router';

export interface AppRoutesProps extends RouteProps {
  isAuthenticated: boolean;
  component: React.FunctionComponent;
} //accept other propierties. Example: exact, path

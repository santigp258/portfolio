import { Redirect, Route } from 'react-router';
//interface props
import { AppRoutesProps } from '../../interface/router.interface';
export const PublicRoutes: React.FC<AppRoutesProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: AppRoutesProps) =>
        isAuthenticated ? <Redirect to="/dash" /> : <Component {...props} />
      }
    />
  );
};

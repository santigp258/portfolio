//interface props
import { Redirect, Route } from 'react-router';
import { AppRoutesProps } from '../../interface/router.interface';

export const PrivateRoutes: React.FC<AppRoutesProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: AppRoutesProps) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

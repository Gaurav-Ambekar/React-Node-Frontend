import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { BASE_URL } from '../config/settings';
import { useAuth } from '../hooks';

interface ProtectedRouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  path,
  ...rest
}) => {
  const { isLoading, isSuccess } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <Spinner open={isLoading} />
        ) : isSuccess ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${BASE_URL}`,
              state: { from: path },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;

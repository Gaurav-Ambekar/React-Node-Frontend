import React from 'react';
import { useQuery } from 'react-query';
import { Redirect, Route } from 'react-router-dom';
import { BASE_URL } from '../../config/settings';
import { getLoggedUser } from '../../rq/UserActions';
import Spinner from '../layouts/Spinner';

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
  const { isSuccess, isLoading } = useQuery(['loadUser'], getLoggedUser, {
    retry: 1,
  });
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

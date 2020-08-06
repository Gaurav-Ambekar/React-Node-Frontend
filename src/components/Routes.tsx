import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BASE_URL } from '../config/settings';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import ProtectedRoute from './routing/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path={`${BASE_URL}/home`} component={Home} />
        <ProtectedRoute
          exact
          path={`${BASE_URL}/master/users`}
          component={Users}
        />
        <Route exact path={`${BASE_URL}/`} component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './containers/home/home';
import Dashboard from './containers/dashboard/dashboard'
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { isLoggedIn } from './redux/auth/selectors';
import { history } from './redux/store';
import { DefaultRoute } from './defaultRoute';

export const PublicRoutes = function (state) {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route 
            exact 
            path='/' 
            component={Home} 
          />
          <Route 
            path="*" 
            component={
              (props) => <DefaultRoute {...state} {...props}/>
            }
          />
          <PrivateRoute
            path='/dashboard'
            component={Dashboard}
            loggedIn={state.isLoggedIn}
          />
        </Switch>
      </Router>
    </ConnectedRouter>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (props) => (
          rest.isLoggedIn
            ? <Component {...props} />
            : <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
              />
        )
      }
    />
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state)
})

export const Routes = connect(mapStateToProps, null)(PublicRoutes);

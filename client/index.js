/*
    Title: Food Avenue
    Description: My first MERN-stack project
    Author: Aries Espiritu
*/

import React                        from 'react';
import { Router, browserHistory }   from 'react-router';
import { render }                   from 'react-dom';
import { Provider }                 from 'react-redux';

import routes                       from './routes';
import configureStore               from './store';

// import setAuthorizationToken        from './utils/setAuthorizationToken'
import setHost                      from './utils/setHost';

const store = configureStore();

setHost();
/*
if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
}
*/
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layouts
import Main                     from './pages/layouts/Main';

// Pages
import Home                     from './pages/Home';
import About                    from './pages/About';

export default(
  <Route>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Route>
);

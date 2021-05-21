import React, { ReactElement } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import NoMatch from '../pages/NoMatch';
import routes from '../utils/routes';

const AppRoutes: React.FC = (): ReactElement => (
  <HashRouter>
    <Switch>
      {routes.map((item) => {
        try {
          const ComponentItem = require(`../pages/${item.component}`).default;
          return <Route key={item.name} exact path={`${item.path}`} component={(props: any) => <ComponentItem itemProps={item} {...props} />} />;
        } catch (err) {
          return <Route key={item.name} exact path={`${item.path}`} component={(props: any) => <NoMatch {...props} />} />;
        }
      })}
      <Route component={(props: any) => <NoMatch {...props} />} />
    </Switch>
  </HashRouter>
);

export default AppRoutes;

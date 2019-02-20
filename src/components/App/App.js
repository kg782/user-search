import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header';
import AllUsers from '../../pages/AllUsers';
import Administrators from '../../pages/Administrators';
import Archived from '../../pages/Archived';
import Favorites from '../../pages/Favorites';
import NonAdmins from '../../pages/NonAdmins';

const App = () => (
  <BrowserRouter className="app">
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/" component={AllUsers} />
          <Route path="/administrators" component={Administrators} />
          <Route path="/archived" component={Archived} />
          <Route path="/favourites" component={Favorites} />
          <Route path="/non-admins" component={NonAdmins} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;

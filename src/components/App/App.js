import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header';
import Nav from '../Nav';
import AllUsers from '../../pages/AllUsers';
import Administrators from '../../pages/Administrators';
import Archived from '../../pages/Archived';
import Favorites from '../../pages/Favorites';
import NonAdmins from '../../pages/NonAdmins';

const App = () => (
  <BrowserRouter>
    <div className="app-root">
      <Header />
      <div className="main">
        <Nav />
        <Switch>
          <Route path="/aa" component={AllUsers} />
          <Route path="/administrators" component={Administrators} />
          <Route path="/archived" component={Archived} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/non-admins" component={NonAdmins} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;

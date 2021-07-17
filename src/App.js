import React from 'react';
import Container from './Container';
import Collection from './Collection';
import Wishlist from './Wishlist';
import Archive from './Archive';
import {HashRouter, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <main>
        <HashRouter>
            <Switch>
              <Route path="/" component={Container} exact />
              <Route path="/Collections" component={Collection} exact />
              <Route path="/Wishlist" component={Wishlist} exact />
              <Route path="/Archive" component={Archive} exact />
            </Switch>
        </HashRouter>
      </main>
    </div>
  );
};

export default App;

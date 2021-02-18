import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Error from './Error';
import Pays from './Pays';
import Continent from './Continent';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/continent">
            <Continent />
          </Route>
          <Route exact path="/pays">
            <Pays />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

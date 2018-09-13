import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route
              exact
              path="/detail/:id"
              component={Detail}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

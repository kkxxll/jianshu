import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact render={() => <div>Home</div>} />
            <Route
              exact
              path="/detail"
              render={() => {
                return <div>detial</div>;
              }}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

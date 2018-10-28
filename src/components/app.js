import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import requireAuth from './require_authentication';
import Header from './header';
import Resources from './resources';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/resources" component={requireAuth(Resources)} />
      </div>
    );
  }
}

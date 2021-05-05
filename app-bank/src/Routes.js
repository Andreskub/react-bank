import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import TransactionAdd from './TransactionAdd';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={TransactionAdd} path='/add' />
        <Route component={Home} exact path='/' />
      </BrowserRouter>
    );
  }
}

export default Routes;

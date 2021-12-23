import React, { Component } from "react";
import Routes from "./Routes";

import { Provider } from 'react-redux';

import store from './data/store';

class App extends Component {
  componentDidMount() { 
    document.body.style.margin = "0px"
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
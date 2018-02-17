import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import Profile from './app/index';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Profile />
      </Provider>
    );
  }
}

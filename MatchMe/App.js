import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import configureStore from './app/store/configureStore';
import Routes from './app/config/routes';

const Navigator = StackNavigator(Routes);

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Navigator />
      </Provider>
    );
  }
}

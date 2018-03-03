import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, Picker } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  login() {
    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
      <View>
        <Button title="Login" onPress={this.login.bind(this)} />
      </View>
    )
  }
}
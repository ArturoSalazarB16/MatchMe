import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, Picker } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button title="Hello" />
      </View>
    )
  }
}
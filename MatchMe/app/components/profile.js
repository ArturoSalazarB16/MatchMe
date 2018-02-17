import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  onFirstTabButtonPressed() {
    this.setState({
      activeTab: 1
    });
  }

  render() {
    if (this.state.activeTab === 0) {
      return (
        <View style={styles.container}>
          <TextInput placeholder="Name:"/>
          <TextInput placeholder="Last Name:"/>
          <Button title="Submit" onPress={this.onFirstTabButtonPressed.bind(this)} />
        </View>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <View style={styles.container}>
          <Button title="Last name" onPress={() => this.state.activeTab = 0} />
        </View>
      );
    }
  }
}

Profile.propTypes = {
  name: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
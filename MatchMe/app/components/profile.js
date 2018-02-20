import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Button, Picker } from 'react-native';

const DATA_INPUT_VIEW = 0;
const QUIZ_VIEW = 1;

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: DATA_INPUT_VIEW,
      user: {}
    };
  }

  moveViewForward() {
    const nextTabIdx = this.state.activeTab + 1;

    if (nextTabIdx < 2) {
      this.setState({
        activeTab: nextTabIdx
      });
    } else {
      this.props.navigation.navigate('Home');
    }
  }

  moveViewBack() {
    if (this.state.activeTab > 0) {
      this.state.activeTab--;
    }

    const nextTabIdx = this.state.activeTab;
    this.setState({
      activeTab: nextTabIdx
    });
  }

  render() {
    if (this.state.activeTab === DATA_INPUT_VIEW) {
      return (
        <View style={styles.container}>
          <TextInput placeholder="Name:" value={this.state.name}/>
          <TextInput placeholder="Last Name:" value={this.state.lastName}/>

          <Button title="Next" onPress={this.moveViewForward.bind(this)} />
        </View>
      );
    } else if (this.state.activeTab === QUIZ_VIEW) {
      return (
        <View style={styles.container}>
          <Picker>
            <Picker.Item label="Answer 1" value="0" />
            <Picker.Item label="Answer 2" value="1" />
          </Picker>

          <Button title="Back" onPress={this.moveViewBack.bind(this)} />
          <Button title="Next" onPress={this.moveViewForward.bind(this)} />
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
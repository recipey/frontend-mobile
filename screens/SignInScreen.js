import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

export default class SignInScreen extends Component {
  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App')
  };
}

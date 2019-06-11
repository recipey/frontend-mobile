import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate appropriate route
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content you want here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <Text>Auth loading!!</Text>
        <StatusBar barStyle="default />"
      </View>
    )
  }
}

//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';

export default class App extends React.Component {


  render() {
    return <AppNavigator />;
  }
}

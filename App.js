import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import fb from '../bottomTabNav/screens/fb';
import ig from '../bottomTabNav/screens/ig';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: fb},
  Instagram: {screen: ig}
});

const AppContainer = createAppContainer(TabNavigator);
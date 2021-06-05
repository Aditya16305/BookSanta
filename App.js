import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './Screens/WelcomeScreen';
import { AppTabNavigator } from './Components/AppTabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <WelcomeScreen/> */}
        <AppContainer/>
      </View>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },

  bottomTab: {
    screen: AppTabNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator);

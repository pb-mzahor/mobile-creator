import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import IntroScreen from './screens/intro/intro-screen';
import CreatorScreen from './screens/creator/creator-screen';

export default createSwitchNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        header: null,
      },
    },
    Creator: {
      screen: CreatorScreen,
    },
  },
  {
    initialRouteName: 'Intro',
  }
);
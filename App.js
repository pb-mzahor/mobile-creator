import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { AppLoading, Asset, Font } from 'expo';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import IntroScreen from './screens/intro/intro-screen';
import CreatorScreen from './screens/creator/creator-screen';

const Navigator = createSwitchNavigator(
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
    initialRouteName: 'Creator',
  }
);

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/splash.png'),
    ]);

    const fontAssets = cacheFonts([
      { 'FormatIcons': require('./assets/icons/formats.ttf') },
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <Navigator />;
  }
}
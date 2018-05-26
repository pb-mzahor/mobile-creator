import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';

import {
  Button,
} from 'react-native-elements'

const splashImage = require('../../images/splash.png');

export default class IntroScreen extends React.Component {
  create = () => {
    this.props.navigation.navigate('Creator');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.splash}
          source={splashImage}
        />
        <SafeAreaView style={styles.mainView}>
          <Text>Create your own story</Text>
          <Button title="Create"
            onPress={this.create}
            backgroundColor="#87aeff"
            borderRadius={10}
            style={styles.createButton}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'space-between',
  },
  splash: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  createButton: {
  },
});

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import {
  ImagePicker,
  Permissions,
} from 'expo';

import {
  Button,
  Card,
} from 'react-native-elements';

import CreateButton from '../../components/create-button';
import ParticlePicker from '../../components/particle-picker';

export default class CreatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.toggleParticlePicker = this.toggleParticlePicker.bind(this);
    this.state = {
      images: [],
      showParticlePicker: false,
    }
  }

  toggleParticlePicker() {
    this.setState(prevState => ({
      showParticlePicker: !prevState.showParticlePicker,
    }));
  }

  async create() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      const image = await ImagePicker.launchImageLibraryAsync();
      this.setState(prevState => ({
        images: [...prevState.images, image],
      }))
    }
  }

  render() {
    const { showParticlePicker } = this.state;
    return (
      <SafeAreaView style={styles.mainView}>
        <Text>Hello</Text>
        {showParticlePicker &&
          <View style={styles.particlePicker}>
            <ParticlePicker />
          </View>
        }
        <CreateButton onPress={this.toggleParticlePicker} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  particlePicker: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  splash: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  createButton: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
});

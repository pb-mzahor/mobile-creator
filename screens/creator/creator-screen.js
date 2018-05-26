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
} from 'react-native-elements'

export default class CreatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }

  async create() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      ImagePicker.launchImageLibraryAsync();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.mainView}>
        <Text>Create your own story</Text>
        <Button title="Add new particle"
          onPress={this.create}
          backgroundColor="#87aeff"
          borderRadius={10}
          style={styles.createButton}
        />
      </SafeAreaView>
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

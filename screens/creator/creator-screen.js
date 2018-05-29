import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Alert,
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
import sectionPicker from '../../components/section-picker';

export default class CreatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.togglesectionPicker = this.togglesectionPicker.bind(this);
    this.addsection = this.addsection.bind(this);
    this.state = {
      images: [],
      showsectionPicker: true,
    }
  }

  togglesectionPicker() {
    this.setState(prevState => ({
      showsectionPicker: !prevState.showsectionPicker,
    }));
  }

  async addsection({ name }) {
    console.log(name)
    switch (name) {
      case 'Media':
        await this.addMediasection();
        break;
      default:
        Alert.alert(
          'Sorry',
          'We need more hands to implement all sections',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
    }
  }

  async addMediasection() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      const image = await ImagePicker.launchImageLibraryAsync();
      this.setState(prevState => ({
        images: [...prevState.images, image],
      }))
    }
  }

  render() {
    const { showsectionPicker } = this.state;
    return (
      <SafeAreaView style={styles.mainView}>
        <Text>Hello</Text>
        {showsectionPicker &&
          <View style={styles.sectionPicker}>
            <sectionPicker onAddsection={this.addsection} />
          </View>
        }
        <CreateButton onPress={this.togglesectionPicker} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionPicker: {
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

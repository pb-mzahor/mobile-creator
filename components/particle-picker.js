import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import Icon from './icon';

export default class ParticlePicker extends Component {
  constructor(props) {
    super(props);
    this.particleTypes = [
      { name: 'Video', icon: 'format-shorts-md' },
      { name: 'Media', icon: 'format-flip-cards-md' },
      { name: 'Text', icon: 'format-list-md' },
      { name: 'Poll', icon: 'format-abstract-md' },
      { name: 'Summary', icon: 'format-abstract-md' },
      { name: 'Quote', icon: 'format-abstract-md' },
      { name: 'Quiz', icon: 'format-personality-quiz-md' },
      { name: 'Flip', icon: 'format-flip-cards-md' },
      { name: 'Trivia', icon: 'format-trivia-md' },
      { name: 'Convo', icon: 'format-convo-md' },
    ]
  }

  particleButton({ name, icon }) {
    return (
      <TouchableOpacity key={name}>
        <View style={styles.createButton}>
          <Icon name={icon} size={32} color="#CA81FF" />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.particleRow}>
          {this.particleTypes.filter((item, idx) => idx < 5).map((x) =>
            this.particleButton(x)
          )}
        </View>
        <View style={styles.particleRow}>
          {this.particleTypes.filter((item, idx) => idx >= 5).map((x) =>
            this.particleButton(x)
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 120,
    width: 300,
    borderRadius: 10,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: '#fff',
  },
  particleRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  createButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'gray',
  },
});
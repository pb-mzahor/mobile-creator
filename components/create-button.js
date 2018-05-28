import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

export default class CreateButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity>
        <View style={styles.createButton}>
          <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  createButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#CA81FF',
  },
  plus: {
    fontSize: 35,
    color: '#FFF',
  },
});
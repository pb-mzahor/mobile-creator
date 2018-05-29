import React, { Component } from 'react';

export default class ImageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Image
          source={this.props.section.image}
        />
      </View>
    );
  }
}
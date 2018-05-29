import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import Imagesection from './sections/image-section';

const sectionRegistry = {
  'Image': Imagesection,
};

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rendersection(section) {
    const section = sectionRegistry[section.type];
    if (!section) {
      return null;
    }

    return <section section={section} />;
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.story.sections.map(section => {
            return this.rendersection(section);
          })
        }
      </ScrollView>
    );
  }
}
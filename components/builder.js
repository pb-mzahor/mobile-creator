import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import ImageSection from './sections/image-section';

const sectionRegistry = {
  'Image': ImageSection,
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

    return <Section section={section} />;
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
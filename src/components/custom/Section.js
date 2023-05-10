import React from 'react';
import {View} from 'react-native';
import SectionHeader from './SectionHeader';

const Section = ({children, title, rightItem}) => {
  if (React.Children.count(children) === 0) {
    return <SectionHeader rightItem={rightItem} title={title} />;
  }
  return (
    <View>
      <SectionHeader rightItem={rightItem} title={title} />
      {children}
    </View>
  );
};

Section.defaultProps = {
  children: null,
  title: null,
  rightItem: null,
};

export default Section;

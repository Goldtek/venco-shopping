import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from './Colors';

const defaultStyle = StyleSheet.create({
  line: {
    paddingTop: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dividerLine,
  },
});

const Divider = ({styles}) => <View style={[defaultStyle.line, styles]} />;

export default Divider;

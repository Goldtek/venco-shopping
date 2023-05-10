// @flow
import React from 'react';
import {Text, View} from 'react-native';
import GlobalStyles from './styles';

export default ({title, rightItem}) => (
  <View style={GlobalStyles.sectionHeader}>
    <Text style={GlobalStyles.sectionTitle}>{title}</Text>
    {rightItem}
  </View>
);
